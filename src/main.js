define(function (require) {
    var echarts = require('echarts');
    var dagre = require('dagre');

    var defaultOptions = {
        rankdir: 'TB'
    };

    echarts.registerLayout(function (ecModel, api) {
        ecModel.eachSeriesByType('graph', function (seriesModel) {
            var layout = seriesModel.get('layout');
            var graph = seriesModel.getGraph();
            var dagreGraph = new dagre.graphlib.Graph();
            var coordSys = seriesModel.coordinateSystem;
            if (!coordSys || coordSys.type !== 'view') {
                throw new Error('Dagre layout not support coordinate system.');
            }

            var layoutConfig = echarts.util.extend({}, defaultOptions);
            echarts.util.extend(layoutConfig, seriesModel.get('dagreLayout'));

            // Set an object for the graph label
            dagreGraph.setGraph({});
            // // Default to assigning a new object as a label for each new edge.
            dagreGraph.setDefaultEdgeLabel(function() { return {}; });
            if (layout === 'dagre') {
                graph.eachNode(function (node) {
                    var itemModel = node.getModel();
                    // TODO Use getVisual
                    var symbolSize = itemModel.get('symbolSize');
                    if (!(symbolSize instanceof Array)) {
                        symbolSize = [symbolSize, symbolSize];
                    }
                    dagreGraph.setNode(node.id, {
                        width: 10,
                        height: 10
                    });
                });

                graph.eachEdge(function (edge) {
                    dagreGraph.setEdge(edge.node1.id, edge.node2.id);
                });

                dagre.layout(dagreGraph, layoutConfig);

                var xMin = Infinity;
                var yMin = Infinity;
                var xMax = -Infinity;
                var yMax = -Infinity;

                var nodeData = seriesModel.getData();
                var edgeData = seriesModel.getEdgeData();
                dagreGraph.nodes().forEach(function (node, idx) {
                    node = dagreGraph.node(node);
                    nodeData.setItemLayout(idx, [node.x, node.y]);

                    xMin = Math.min(xMin, node.x);
                    yMin = Math.min(yMin, node.y);

                    xMax = Math.max(xMax, node.x);
                    yMax = Math.max(yMax, node.y);
                });
                dagreGraph.edges().forEach(function (edge, idx) {
                    var n1 = dagreGraph.node(edge.v);
                    var n2 = dagreGraph.node(edge.w);
                    var edgeModel = edgeData.getItemModel(idx);
                    var curveness = edgeModel.get('lineStyle.normal.curveness');
                    var points = [
                        [n1.x, n1.y],
                        [n2.x, n2.y]
                    ];
                    if (curveness > 0) {
                        var cx = (n1.x + n2.x) / 2 * (1 - curveness);
                        var cy = (n1.y + n2.y) / 2 * (1 - curveness);
                        if (layoutConfig.rankdir === 'LR' || layoutConfig.rankdir === 'RL') {
                            points.push(
                                [n1.x * curveness + cx, n2.y * curveness + cy]
                            );
                        }
                        else {
                            points.push(
                                [n2.x * curveness + cx, n1.y * curveness + cy]
                            );
                        }
                    }
                    edgeData.setItemLayout(idx, points);
                });

                // Keep aspect
                var aspect = (xMax - xMin) / (yMax - yMin);
                var viewRect = coordSys.getViewRect();
                var viewAspect = viewRect.width / viewRect.height;
                if (aspect > viewAspect) {
                    var newHeight = viewRect.width / aspect;
                    viewRect.y += (viewRect.height - newHeight) / 2;
                    viewRect.height = newHeight;
                }
                else {
                    var newWidth = viewRect.height * aspect;
                    viewRect.x += (viewRect.width - newWidth) / 2;
                    viewRect.width = newWidth;
                }
                // Reset bounding rect
                coordSys.setBoundingRect(xMin, yMin, xMax - xMin, yMax - yMin);
                coordSys.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
            }
        });
    });
});