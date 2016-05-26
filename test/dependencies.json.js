define({
  "CoordinateSystem": [],
  "ExtensionAPI": [],
  "action/createDataSelectAction": [
    "echarts"
  ],
  "action/geoRoam": [
    "action/roamHelper",
    "echarts"
  ],
  "action/roamHelper": [],
  "chart/bar": [
    "chart/bar/BarSeries",
    "chart/bar/BarView",
    "component/grid",
    "coord/cartesian/Grid",
    "echarts",
    "layout/barGrid"
  ],
  "chart/bar/BarSeries": [
    "chart/helper/createListFromArray",
    "model/Series"
  ],
  "chart/bar/BarView": [
    "chart/bar/barItemStyle",
    "echarts",
    "model/Model",
    "util/graphic"
  ],
  "chart/bar/barItemStyle": [
    "model/mixin/makeStyleMapper"
  ],
  "chart/boxplot": [
    "chart/boxplot/BoxplotSeries",
    "chart/boxplot/BoxplotView",
    "chart/boxplot/boxplotLayout",
    "chart/boxplot/boxplotVisual",
    "echarts"
  ],
  "chart/boxplot/BoxplotSeries": [
    "chart/helper/whiskerBoxCommon",
    "model/Series"
  ],
  "chart/boxplot/BoxplotView": [
    "chart/helper/whiskerBoxCommon",
    "util/graphic",
    "view/Chart"
  ],
  "chart/boxplot/boxplotLayout": [
    "util/number"
  ],
  "chart/boxplot/boxplotVisual": [],
  "chart/candlestick": [
    "chart/candlestick/CandlestickSeries",
    "chart/candlestick/CandlestickView",
    "chart/candlestick/candlestickLayout",
    "chart/candlestick/candlestickVisual",
    "chart/candlestick/preprocessor",
    "echarts"
  ],
  "chart/candlestick/CandlestickSeries": [
    "chart/helper/whiskerBoxCommon",
    "model/Series",
    "util/format"
  ],
  "chart/candlestick/CandlestickView": [
    "chart/helper/whiskerBoxCommon",
    "util/graphic",
    "view/Chart"
  ],
  "chart/candlestick/candlestickLayout": [],
  "chart/candlestick/candlestickVisual": [],
  "chart/candlestick/preprocessor": [],
  "chart/chord": [
    "chart/chord/ChordSeries",
    "chart/chord/ChordView",
    "chart/chord/chordCircularLayout",
    "echarts",
    "processor/dataFilter",
    "visual/dataColor"
  ],
  "chart/chord/ChordSeries": [
    "chart/helper/createGraphFromNodeEdge",
    "chart/helper/createGraphFromNodeMatrix",
    "model/Series"
  ],
  "chart/chord/ChordView": [
    "chart/chord/Ribbon",
    "echarts",
    "util/graphic"
  ],
  "chart/chord/Ribbon": [
    "util/graphic"
  ],
  "chart/chord/chordCircularLayout": [
    "util/number"
  ],
  "chart/effectScatter": [
    "chart/effectScatter/EffectScatterSeries",
    "chart/effectScatter/EffectScatterView",
    "echarts",
    "layout/points",
    "visual/symbol"
  ],
  "chart/effectScatter/EffectScatterSeries": [
    "chart/helper/createListFromArray",
    "model/Series"
  ],
  "chart/effectScatter/EffectScatterView": [
    "chart/helper/EffectSymbol",
    "chart/helper/SymbolDraw",
    "echarts"
  ],
  "chart/funnel": [
    "chart/funnel/FunnelSeries",
    "chart/funnel/FunnelView",
    "chart/funnel/funnelLayout",
    "echarts",
    "processor/dataFilter",
    "visual/dataColor"
  ],
  "chart/funnel/FunnelSeries": [
    "data/List",
    "data/helper/completeDimensions",
    "echarts",
    "util/model"
  ],
  "chart/funnel/FunnelView": [
    "util/graphic",
    "view/Chart"
  ],
  "chart/funnel/funnelLayout": [
    "util/layout",
    "util/number"
  ],
  "chart/gauge": [
    "chart/gauge/GaugeSeries",
    "chart/gauge/GaugeView"
  ],
  "chart/gauge/GaugeSeries": [
    "data/List",
    "model/Series"
  ],
  "chart/gauge/GaugeView": [
    "chart/gauge/PointerPath",
    "util/graphic",
    "util/number",
    "view/Chart"
  ],
  "chart/gauge/PointerPath": [],
  "chart/graph": [
    "chart/graph/GraphSeries",
    "chart/graph/GraphView",
    "chart/graph/categoryFilter",
    "chart/graph/categoryVisual",
    "chart/graph/circularLayout",
    "chart/graph/createView",
    "chart/graph/edgeVisual",
    "chart/graph/forceLayout",
    "chart/graph/roamAction",
    "chart/graph/simpleLayout",
    "echarts",
    "visual/symbol"
  ],
  "chart/graph/GraphSeries": [
    "chart/helper/createGraphFromNodeEdge",
    "data/List",
    "echarts",
    "model/Model",
    "util/model"
  ],
  "chart/graph/GraphView": [
    "chart/graph/adjustEdge",
    "chart/helper/LineDraw",
    "chart/helper/SymbolDraw",
    "component/helper/RoamController",
    "echarts",
    "util/graphic"
  ],
  "chart/graph/adjustEdge": [],
  "chart/graph/backwardCompat": [],
  "chart/graph/categoryFilter": [],
  "chart/graph/categoryVisual": [],
  "chart/graph/circularLayout": [
    "chart/graph/circularLayoutHelper"
  ],
  "chart/graph/circularLayoutHelper": [],
  "chart/graph/createView": [
    "coord/View",
    "util/layout"
  ],
  "chart/graph/edgeVisual": [],
  "chart/graph/forceHelper": [],
  "chart/graph/forceLayout": [
    "chart/graph/circularLayoutHelper",
    "chart/graph/forceHelper",
    "chart/graph/simpleLayoutHelper",
    "util/number"
  ],
  "chart/graph/roamAction": [
    "action/roamHelper",
    "echarts"
  ],
  "chart/graph/simpleLayout": [
    "chart/graph/simpleLayoutEdge",
    "chart/graph/simpleLayoutHelper"
  ],
  "chart/graph/simpleLayoutEdge": [],
  "chart/graph/simpleLayoutHelper": [
    "chart/graph/simpleLayoutEdge"
  ],
  "chart/heatmap": [
    "chart/heatmap/HeatmapSeries",
    "chart/heatmap/HeatmapView"
  ],
  "chart/heatmap/HeatmapLayer": [],
  "chart/heatmap/HeatmapSeries": [
    "chart/helper/createListFromArray",
    "model/Series"
  ],
  "chart/heatmap/HeatmapView": [
    "chart/heatmap/HeatmapLayer",
    "echarts",
    "util/graphic"
  ],
  "chart/helper/EffectLine": [
    "chart/helper/Line",
    "util/graphic",
    "util/symbol"
  ],
  "chart/helper/EffectSymbol": [
    "chart/helper/Symbol",
    "util/graphic",
    "util/number",
    "util/symbol"
  ],
  "chart/helper/LargeSymbolDraw": [
    "util/graphic",
    "util/symbol"
  ],
  "chart/helper/Line": [
    "chart/helper/LinePath",
    "util/graphic",
    "util/number",
    "util/symbol"
  ],
  "chart/helper/LineDraw": [
    "chart/helper/Line",
    "util/graphic"
  ],
  "chart/helper/LinePath": [
    "util/graphic"
  ],
  "chart/helper/Symbol": [
    "util/graphic",
    "util/number",
    "util/symbol"
  ],
  "chart/helper/SymbolDraw": [
    "chart/helper/Symbol",
    "util/graphic"
  ],
  "chart/helper/WhiskerBoxDraw": [
    "util/graphic"
  ],
  "chart/helper/createGraphFromNodeEdge": [
    "CoordinateSystem",
    "chart/helper/createListFromArray",
    "data/Graph",
    "data/List",
    "data/helper/completeDimensions",
    "data/helper/linkList"
  ],
  "chart/helper/createGraphFromNodeMatrix": [
    "CoordinateSystem",
    "chart/helper/createListFromArray",
    "data/Graph",
    "data/List",
    "data/helper/completeDimensions",
    "data/helper/linkList"
  ],
  "chart/helper/createListFromArray": [
    "CoordinateSystem",
    "data/List",
    "data/helper/completeDimensions",
    "util/model"
  ],
  "chart/helper/whiskerBoxCommon": [
    "chart/helper/WhiskerBoxDraw",
    "data/List",
    "data/helper/completeDimensions"
  ],
  "chart/line": [
    "chart/line/LineSeries",
    "chart/line/LineView",
    "component/grid",
    "echarts",
    "layout/points",
    "processor/dataSample",
    "visual/symbol"
  ],
  "chart/line/LineSeries": [
    "chart/helper/createListFromArray",
    "model/Series"
  ],
  "chart/line/LineView": [
    "chart/helper/Symbol",
    "chart/helper/SymbolDraw",
    "chart/line/lineAnimationDiff",
    "chart/line/poly",
    "util/graphic",
    "view/Chart"
  ],
  "chart/line/lineAnimationDiff": [],
  "chart/line/poly": [],
  "chart/lines": [
    "chart/lines/LinesSeries",
    "chart/lines/LinesView",
    "chart/lines/linesLayout",
    "echarts",
    "visual/seriesColor"
  ],
  "chart/lines/LinesSeries": [
    "CoordinateSystem",
    "data/List",
    "model/Series"
  ],
  "chart/lines/LinesView": [
    "chart/helper/EffectLine",
    "chart/helper/Line",
    "chart/helper/LineDraw",
    "echarts"
  ],
  "chart/lines/linesLayout": [],
  "chart/map": [
    "action/createDataSelectAction",
    "action/geoRoam",
    "chart/map/MapSeries",
    "chart/map/MapView",
    "chart/map/backwardCompat",
    "chart/map/mapDataStatistic",
    "chart/map/mapSymbolLayout",
    "chart/map/mapVisual",
    "coord/geo/geoCreator",
    "echarts"
  ],
  "chart/map/MapSeries": [
    "component/helper/selectableMixin",
    "coord/geo/geoCreator",
    "data/List",
    "data/helper/completeDimensions",
    "model/Series",
    "util/format"
  ],
  "chart/map/MapView": [
    "component/helper/MapDraw",
    "echarts",
    "util/graphic"
  ],
  "chart/map/backwardCompat": [],
  "chart/map/mapDataStatistic": [],
  "chart/map/mapSymbolLayout": [],
  "chart/map/mapVisual": [],
  "chart/parallel": [
    "chart/parallel/ParallelSeries",
    "chart/parallel/ParallelView",
    "chart/parallel/parallelVisual",
    "component/parallel",
    "echarts"
  ],
  "chart/parallel/ParallelSeries": [
    "data/List",
    "model/Series"
  ],
  "chart/parallel/ParallelView": [
    "util/graphic",
    "view/Chart"
  ],
  "chart/parallel/parallelVisual": [],
  "chart/pie": [
    "action/createDataSelectAction",
    "chart/pie/PieSeries",
    "chart/pie/PieView",
    "chart/pie/pieLayout",
    "echarts",
    "processor/dataFilter",
    "visual/dataColor"
  ],
  "chart/pie/PieSeries": [
    "component/helper/selectableMixin",
    "data/List",
    "data/helper/completeDimensions",
    "echarts",
    "util/model"
  ],
  "chart/pie/PieView": [
    "util/graphic",
    "view/Chart"
  ],
  "chart/pie/labelLayout": [],
  "chart/pie/pieLayout": [
    "chart/pie/labelLayout",
    "util/number"
  ],
  "chart/radar": [
    "chart/radar/RadarSeries",
    "chart/radar/RadarView",
    "chart/radar/backwardCompat",
    "chart/radar/radarLayout",
    "component/radar",
    "echarts",
    "processor/dataFilter",
    "visual/dataColor",
    "visual/symbol"
  ],
  "chart/radar/RadarSeries": [
    "data/List",
    "data/helper/completeDimensions",
    "model/Series"
  ],
  "chart/radar/RadarView": [
    "echarts",
    "util/graphic",
    "util/symbol"
  ],
  "chart/radar/backwardCompat": [],
  "chart/radar/radarLayout": [],
  "chart/sankey": [
    "chart/sankey/SankeySeries",
    "chart/sankey/SankeyView",
    "chart/sankey/sankeyLayout",
    "chart/sankey/sankeyVisual",
    "echarts"
  ],
  "chart/sankey/SankeySeries": [
    "chart/helper/createGraphFromNodeEdge",
    "model/Series"
  ],
  "chart/sankey/SankeyView": [
    "echarts",
    "util/graphic"
  ],
  "chart/sankey/sankeyLayout": [
    "util/array/nest",
    "util/layout"
  ],
  "chart/sankey/sankeyVisual": [
    "visual/VisualMapping"
  ],
  "chart/scatter": [
    "chart/scatter/ScatterSeries",
    "chart/scatter/ScatterView",
    "component/grid",
    "echarts",
    "layout/points",
    "visual/symbol"
  ],
  "chart/scatter/ScatterSeries": [
    "chart/helper/createListFromArray",
    "model/Series"
  ],
  "chart/scatter/ScatterView": [
    "chart/helper/LargeSymbolDraw",
    "chart/helper/SymbolDraw",
    "echarts"
  ],
  "chart/themeRiver": [
    "chart/themeRiver/ThemeRiverSeries",
    "chart/themeRiver/ThemeRiverView",
    "chart/themeRiver/themeRiverLayout",
    "chart/themeRiver/themeRiverVisual",
    "echarts",
    "processor/dataFilter"
  ],
  "chart/themeRiver/ThemeRiverSeries": [
    "data/List",
    "data/helper/completeDimensions",
    "model/Series",
    "util/array/nest",
    "util/format"
  ],
  "chart/themeRiver/ThemeRiverView": [
    "chart/line/poly",
    "data/DataDiffer",
    "echarts",
    "util/graphic"
  ],
  "chart/themeRiver/themeRiverLayout": [
    "util/number"
  ],
  "chart/themeRiver/themeRiverVisual": [],
  "chart/treemap": [
    "chart/treemap/TreemapSeries",
    "chart/treemap/TreemapView",
    "chart/treemap/treemapAction",
    "chart/treemap/treemapLayout",
    "chart/treemap/treemapVisual",
    "echarts"
  ],
  "chart/treemap/Breadcrumb": [
    "util/graphic",
    "util/layout"
  ],
  "chart/treemap/TreemapSeries": [
    "data/Tree",
    "model/Model",
    "model/Series",
    "util/format"
  ],
  "chart/treemap/TreemapView": [
    "chart/treemap/Breadcrumb",
    "chart/treemap/helper",
    "component/helper/RoamController",
    "data/DataDiffer",
    "echarts",
    "util/animation",
    "util/graphic"
  ],
  "chart/treemap/helper": [],
  "chart/treemap/treemapAction": [
    "chart/treemap/helper",
    "echarts"
  ],
  "chart/treemap/treemapLayout": [
    "chart/treemap/helper",
    "util/layout",
    "util/number"
  ],
  "chart/treemap/treemapVisual": [
    "visual/VisualMapping"
  ],
  "component/angleAxis": [
    "component/axis/AngleAxisView",
    "coord/polar/polarCreator"
  ],
  "component/axis": [
    "component/axis/AxisView",
    "coord/cartesian/AxisModel"
  ],
  "component/axis/AngleAxisView": [
    "echarts",
    "model/Model",
    "util/graphic"
  ],
  "component/axis/AxisBuilder": [
    "model/Model",
    "util/graphic",
    "util/number"
  ],
  "component/axis/AxisView": [
    "component/axis/AxisBuilder",
    "echarts",
    "util/graphic"
  ],
  "component/axis/ParallelAxisView": [
    "component/axis/AxisBuilder",
    "component/helper/SelectController",
    "echarts"
  ],
  "component/axis/RadiusAxisView": [
    "component/axis/AxisBuilder",
    "echarts",
    "util/graphic"
  ],
  "component/axis/SingleAxisView": [
    "component/axis/AxisBuilder",
    "echarts",
    "util/graphic"
  ],
  "component/axis/parallelAxisAction": [
    "echarts"
  ],
  "component/dataZoom": [
    "component/dataZoom/DataZoomModel",
    "component/dataZoom/DataZoomView",
    "component/dataZoom/InsideZoomModel",
    "component/dataZoom/InsideZoomView",
    "component/dataZoom/SliderZoomModel",
    "component/dataZoom/SliderZoomView",
    "component/dataZoom/dataZoomAction",
    "component/dataZoom/dataZoomProcessor",
    "component/dataZoom/typeDefaulter"
  ],
  "component/dataZoom/AxisProxy": [
    "util/number"
  ],
  "component/dataZoom/DataZoomModel": [
    "component/dataZoom/AxisProxy",
    "echarts",
    "util/model"
  ],
  "component/dataZoom/DataZoomView": [
    "view/Component"
  ],
  "component/dataZoom/InsideZoomModel": [
    "component/dataZoom/DataZoomModel"
  ],
  "component/dataZoom/InsideZoomView": [
    "component/dataZoom/DataZoomView",
    "component/dataZoom/roams",
    "component/helper/sliderMove"
  ],
  "component/dataZoom/SelectZoomModel": [
    "component/dataZoom/DataZoomModel"
  ],
  "component/dataZoom/SelectZoomView": [
    "component/dataZoom/DataZoomView"
  ],
  "component/dataZoom/SliderZoomModel": [
    "component/dataZoom/DataZoomModel"
  ],
  "component/dataZoom/SliderZoomView": [
    "component/dataZoom/DataZoomView",
    "component/helper/sliderMove",
    "util/graphic",
    "util/layout",
    "util/number",
    "util/throttle"
  ],
  "component/dataZoom/dataZoomAction": [
    "echarts",
    "util/model"
  ],
  "component/dataZoom/dataZoomProcessor": [
    "echarts"
  ],
  "component/dataZoom/history": [],
  "component/dataZoom/roams": [
    "component/helper/RoamController",
    "util/throttle"
  ],
  "component/dataZoom/typeDefaulter": [
    "model/Component"
  ],
  "component/dataZoomInside": [
    "component/dataZoom/DataZoomModel",
    "component/dataZoom/DataZoomView",
    "component/dataZoom/InsideZoomModel",
    "component/dataZoom/InsideZoomView",
    "component/dataZoom/dataZoomAction",
    "component/dataZoom/dataZoomProcessor",
    "component/dataZoom/typeDefaulter"
  ],
  "component/dataZoomSelect": [
    "component/dataZoom/DataZoomModel",
    "component/dataZoom/DataZoomView",
    "component/dataZoom/SelectZoomModel",
    "component/dataZoom/SelectZoomView",
    "component/dataZoom/dataZoomAction",
    "component/dataZoom/dataZoomProcessor",
    "component/dataZoom/typeDefaulter"
  ],
  "component/geo": [
    "action/geoRoam",
    "component/geo/GeoView",
    "coord/geo/GeoModel",
    "coord/geo/geoCreator",
    "echarts"
  ],
  "component/geo/GeoView": [
    "component/helper/MapDraw",
    "echarts"
  ],
  "component/grid": [
    "component/axis",
    "coord/cartesian/Grid",
    "echarts",
    "util/graphic"
  ],
  "component/helper/MapDraw": [
    "component/helper/RoamController",
    "util/graphic"
  ],
  "component/helper/RoamController": [
    "component/helper/interactionMutex"
  ],
  "component/helper/SelectController": [
    "util/graphic"
  ],
  "component/helper/interactionMutex": [],
  "component/helper/listComponent": [
    "util/format",
    "util/graphic",
    "util/layout"
  ],
  "component/helper/selectableMixin": [],
  "component/helper/sliderMove": [],
  "component/legend": [
    "component/legend/LegendModel",
    "component/legend/LegendView",
    "component/legend/legendAction",
    "component/legend/legendFilter",
    "echarts"
  ],
  "component/legend/LegendModel": [
    "echarts",
    "model/Model"
  ],
  "component/legend/LegendView": [
    "component/helper/listComponent",
    "echarts",
    "util/graphic",
    "util/symbol"
  ],
  "component/legend/legendAction": [
    "echarts"
  ],
  "component/legend/legendFilter": [],
  "component/markLine": [
    "component/marker/MarkLineModel",
    "component/marker/MarkLineView",
    "echarts"
  ],
  "component/markPoint": [
    "component/marker/MarkPointModel",
    "component/marker/MarkPointView",
    "echarts"
  ],
  "component/marker/MarkLineModel": [
    "echarts",
    "util/model"
  ],
  "component/marker/MarkLineView": [
    "chart/helper/LineDraw",
    "component/marker/markerHelper",
    "data/List",
    "echarts",
    "util/format",
    "util/model",
    "util/number"
  ],
  "component/marker/MarkPointModel": [
    "echarts",
    "util/model"
  ],
  "component/marker/MarkPointView": [
    "chart/helper/SymbolDraw",
    "component/marker/markerHelper",
    "data/List",
    "echarts",
    "util/format",
    "util/model",
    "util/number"
  ],
  "component/marker/markerHelper": [
    "util/number"
  ],
  "component/parallel": [
    "component/parallelAxis",
    "coord/parallel/ParallelModel",
    "coord/parallel/parallelCreator",
    "coord/parallel/parallelPreprocessor",
    "echarts"
  ],
  "component/parallelAxis": [
    "component/axis/ParallelAxisView",
    "component/axis/parallelAxisAction",
    "coord/parallel/parallelCreator"
  ],
  "component/polar": [
    "component/angleAxis",
    "component/radiusAxis",
    "coord/polar/polarCreator",
    "echarts"
  ],
  "component/radar": [
    "component/radar/RadarView",
    "coord/radar/Radar",
    "coord/radar/RadarModel"
  ],
  "component/radar/RadarView": [
    "component/axis/AxisBuilder",
    "echarts",
    "util/graphic"
  ],
  "component/radiusAxis": [
    "component/axis/RadiusAxisView",
    "coord/polar/polarCreator"
  ],
  "component/single": [
    "component/singleAxis",
    "coord/single/singleCreator",
    "echarts"
  ],
  "component/singleAxis": [
    "component/axis/SingleAxisView",
    "coord/single/AxisModel",
    "coord/single/singleCreator"
  ],
  "component/timeline": [
    "component/timeline/SliderTimelineModel",
    "component/timeline/SliderTimelineView",
    "component/timeline/preprocessor",
    "component/timeline/timelineAction",
    "component/timeline/typeDefaulter",
    "echarts"
  ],
  "component/timeline/SliderTimelineModel": [
    "component/timeline/TimelineModel",
    "util/model"
  ],
  "component/timeline/SliderTimelineView": [
    "component/timeline/TimelineAxis",
    "component/timeline/TimelineView",
    "coord/axisHelper",
    "util/format",
    "util/graphic",
    "util/layout",
    "util/number",
    "util/symbol"
  ],
  "component/timeline/TimelineAxis": [
    "coord/Axis",
    "coord/axisHelper"
  ],
  "component/timeline/TimelineModel": [
    "data/List",
    "model/Component",
    "util/model"
  ],
  "component/timeline/TimelineView": [
    "view/Component"
  ],
  "component/timeline/preprocessor": [],
  "component/timeline/timelineAction": [
    "echarts"
  ],
  "component/timeline/typeDefaulter": [
    "model/Component"
  ],
  "component/title": [
    "echarts",
    "util/graphic",
    "util/layout"
  ],
  "component/toolbox": [
    "component/toolbox/ToolboxModel",
    "component/toolbox/ToolboxView",
    "component/toolbox/feature/DataView",
    "component/toolbox/feature/DataZoom",
    "component/toolbox/feature/MagicType",
    "component/toolbox/feature/Restore",
    "component/toolbox/feature/SaveAsImage"
  ],
  "component/toolbox/ToolboxModel": [
    "component/toolbox/featureManager",
    "echarts"
  ],
  "component/toolbox/ToolboxView": [
    "component/helper/listComponent",
    "component/toolbox/featureManager",
    "data/DataDiffer",
    "echarts",
    "model/Model",
    "util/graphic"
  ],
  "component/toolbox/feature/DataView": [
    "component/toolbox/featureManager",
    "echarts"
  ],
  "component/toolbox/feature/DataZoom": [
    "component/dataZoom/history",
    "component/dataZoomSelect",
    "component/helper/SelectController",
    "component/helper/interactionMutex",
    "component/toolbox/featureManager",
    "echarts",
    "util/number"
  ],
  "component/toolbox/feature/MagicType": [
    "component/toolbox/featureManager",
    "echarts"
  ],
  "component/toolbox/feature/Restore": [
    "component/dataZoom/history",
    "component/toolbox/featureManager",
    "echarts"
  ],
  "component/toolbox/feature/SaveAsImage": [
    "component/toolbox/featureManager"
  ],
  "component/toolbox/featureManager": [],
  "component/tooltip": [
    "component/tooltip/TooltipModel",
    "component/tooltip/TooltipView",
    "echarts"
  ],
  "component/tooltip/TooltipContent": [
    "util/format"
  ],
  "component/tooltip/TooltipModel": [
    "echarts"
  ],
  "component/tooltip/TooltipView": [
    "component/tooltip/TooltipContent",
    "echarts",
    "util/format",
    "util/graphic",
    "util/number"
  ],
  "component/visualMap": [
    "component/visualMapContinuous",
    "component/visualMapPiecewise"
  ],
  "component/visualMap/ContinuousModel": [
    "component/visualMap/VisualMapModel",
    "util/number"
  ],
  "component/visualMap/ContinuousView": [
    "component/helper/sliderMove",
    "component/visualMap/VisualMapView",
    "component/visualMap/helper",
    "util/graphic",
    "util/number"
  ],
  "component/visualMap/PiecewiseModel": [
    "component/visualMap/VisualMapModel",
    "visual/VisualMapping"
  ],
  "component/visualMap/PiecewiseView": [
    "component/visualMap/VisualMapView",
    "component/visualMap/helper",
    "util/graphic",
    "util/layout",
    "util/symbol"
  ],
  "component/visualMap/VisualMapModel": [
    "echarts",
    "util/model",
    "util/number",
    "visual/VisualMapping",
    "visual/visualDefault"
  ],
  "component/visualMap/VisualMapView": [
    "echarts",
    "util/format",
    "util/graphic",
    "util/layout",
    "visual/VisualMapping"
  ],
  "component/visualMap/helper": [
    "data/DataDiffer",
    "util/layout"
  ],
  "component/visualMap/preprocessor": [],
  "component/visualMap/typeDefaulter": [
    "model/Component"
  ],
  "component/visualMap/visualCoding": [
    "echarts",
    "visual/VisualMapping"
  ],
  "component/visualMap/visualMapAction": [
    "echarts"
  ],
  "component/visualMapContinuous": [
    "component/visualMap/ContinuousModel",
    "component/visualMap/ContinuousView",
    "component/visualMap/preprocessor",
    "component/visualMap/typeDefaulter",
    "component/visualMap/visualCoding",
    "component/visualMap/visualMapAction",
    "echarts"
  ],
  "component/visualMapPiecewise": [
    "component/visualMap/PiecewiseModel",
    "component/visualMap/PiecewiseView",
    "component/visualMap/preprocessor",
    "component/visualMap/typeDefaulter",
    "component/visualMap/visualCoding",
    "component/visualMap/visualMapAction",
    "echarts"
  ],
  "coord/Axis": [
    "util/number"
  ],
  "coord/View": [],
  "coord/axisDefault": [],
  "coord/axisHelper": [
    "scale/Interval",
    "scale/Log",
    "scale/Ordinal",
    "scale/Scale",
    "scale/Time",
    "util/number"
  ],
  "coord/axisModelCommonMixin": [
    "coord/axisHelper"
  ],
  "coord/axisModelCreator": [
    "coord/axisDefault",
    "model/Component",
    "util/layout"
  ],
  "coord/cartesian/Axis2D": [
    "coord/Axis",
    "coord/cartesian/axisLabelInterval"
  ],
  "coord/cartesian/AxisModel": [
    "coord/axisModelCommonMixin",
    "coord/axisModelCreator",
    "model/Component"
  ],
  "coord/cartesian/Cartesian": [],
  "coord/cartesian/Cartesian2D": [
    "coord/cartesian/Cartesian"
  ],
  "coord/cartesian/Grid": [
    "CoordinateSystem",
    "coord/axisHelper",
    "coord/cartesian/Axis2D",
    "coord/cartesian/Cartesian2D",
    "coord/cartesian/GridModel",
    "util/layout"
  ],
  "coord/cartesian/GridModel": [
    "coord/cartesian/AxisModel",
    "model/Component"
  ],
  "coord/cartesian/axisLabelInterval": [
    "coord/axisHelper"
  ],
  "coord/geo/Geo": [
    "coord/View",
    "coord/geo/fix/geoCoord",
    "coord/geo/fix/nanhai",
    "coord/geo/fix/textCoord",
    "coord/geo/parseGeoJson"
  ],
  "coord/geo/GeoModel": [
    "component/helper/selectableMixin",
    "coord/geo/geoCreator",
    "model/Component",
    "model/Model",
    "util/model"
  ],
  "coord/geo/Region": [],
  "coord/geo/fix/geoCoord": [],
  "coord/geo/fix/nanhai": [
    "coord/geo/Region"
  ],
  "coord/geo/fix/textCoord": [],
  "coord/geo/geoCreator": [
    "coord/geo/Geo",
    "echarts",
    "util/layout"
  ],
  "coord/geo/parseGeoJson": [
    "coord/geo/Region"
  ],
  "coord/parallel/AxisModel": [
    "coord/axisModelCommonMixin",
    "coord/axisModelCreator",
    "model/Component",
    "model/mixin/makeStyleMapper",
    "util/number"
  ],
  "coord/parallel/Parallel": [
    "coord/axisHelper",
    "coord/parallel/ParallelAxis",
    "util/layout"
  ],
  "coord/parallel/ParallelAxis": [
    "coord/Axis"
  ],
  "coord/parallel/ParallelModel": [
    "coord/parallel/AxisModel",
    "model/Component"
  ],
  "coord/parallel/parallelCreator": [
    "CoordinateSystem",
    "coord/parallel/Parallel"
  ],
  "coord/parallel/parallelPreprocessor": [
    "util/model"
  ],
  "coord/polar/AngleAxis": [
    "coord/Axis"
  ],
  "coord/polar/AxisModel": [
    "coord/axisModelCommonMixin",
    "coord/axisModelCreator",
    "model/Component"
  ],
  "coord/polar/Polar": [
    "coord/polar/AngleAxis",
    "coord/polar/RadiusAxis"
  ],
  "coord/polar/PolarModel": [
    "coord/polar/AxisModel",
    "echarts"
  ],
  "coord/polar/RadiusAxis": [
    "coord/Axis"
  ],
  "coord/polar/polarCreator": [
    "CoordinateSystem",
    "coord/axisHelper",
    "coord/polar/Polar",
    "coord/polar/PolarModel",
    "util/number"
  ],
  "coord/radar/IndicatorAxis": [
    "coord/Axis"
  ],
  "coord/radar/Radar": [
    "CoordinateSystem",
    "coord/axisHelper",
    "coord/radar/IndicatorAxis",
    "scale/Interval",
    "util/number"
  ],
  "coord/radar/RadarModel": [
    "coord/axisDefault",
    "coord/axisModelCommonMixin",
    "echarts",
    "model/Model"
  ],
  "coord/single/AxisModel": [
    "coord/axisModelCommonMixin",
    "coord/axisModelCreator",
    "model/Component"
  ],
  "coord/single/Single": [
    "coord/axisHelper",
    "coord/single/SingleAxis",
    "util/layout"
  ],
  "coord/single/SingleAxis": [
    "coord/Axis",
    "coord/axisHelper"
  ],
  "coord/single/singleCreator": [
    "CoordinateSystem",
    "coord/single/Single"
  ],
  "data/DataDiffer": [],
  "data/Graph": [],
  "data/List": [
    "data/DataDiffer",
    "model/Model",
    "util/model"
  ],
  "data/Tree": [
    "data/List",
    "data/helper/completeDimensions",
    "data/helper/linkList",
    "model/Model"
  ],
  "data/helper/completeDimensions": [],
  "data/helper/linkList": [],
  "echarts": [
    "CoordinateSystem",
    "ExtensionAPI",
    "loading/default",
    "model/Component",
    "model/Global",
    "model/OptionManager",
    "model/Series",
    "preprocessor/backwardCompat",
    "util/format",
    "util/graphic",
    "util/number",
    "view/Chart",
    "view/Component",
    "visual/seriesColor"
  ],
  "layout/barGrid": [
    "util/number"
  ],
  "layout/points": [],
  "loading/default": [
    "util/graphic"
  ],
  "model/Component": [
    "model/Model",
    "model/mixin/boxLayout",
    "util/clazz",
    "util/component",
    "util/layout"
  ],
  "model/Global": [
    "model/Component",
    "model/Model",
    "model/globalDefault",
    "util/model"
  ],
  "model/Model": [
    "model/mixin/areaStyle",
    "model/mixin/itemStyle",
    "model/mixin/lineStyle",
    "model/mixin/textStyle",
    "util/clazz"
  ],
  "model/OptionManager": [
    "model/Component",
    "util/model"
  ],
  "model/Series": [
    "model/Component",
    "util/format",
    "util/model"
  ],
  "model/globalDefault": [],
  "model/mixin/areaStyle": [
    "model/mixin/makeStyleMapper"
  ],
  "model/mixin/boxLayout": [],
  "model/mixin/itemStyle": [
    "model/mixin/makeStyleMapper"
  ],
  "model/mixin/lineStyle": [
    "model/mixin/makeStyleMapper"
  ],
  "model/mixin/makeStyleMapper": [],
  "model/mixin/textStyle": [],
  "preprocessor/backwardCompat": [
    "preprocessor/helper/compatStyle"
  ],
  "preprocessor/helper/compatStyle": [],
  "processor/dataFilter": [],
  "processor/dataSample": [],
  "scale/Interval": [
    "scale/Scale",
    "util/format",
    "util/number"
  ],
  "scale/Log": [
    "scale/Interval",
    "scale/Scale",
    "util/number"
  ],
  "scale/Ordinal": [
    "scale/Scale"
  ],
  "scale/Scale": [
    "util/clazz"
  ],
  "scale/Time": [
    "scale/Interval",
    "util/format",
    "util/number"
  ],
  "util/KDTree": [
    "util/quickSelect"
  ],
  "util/animation": [],
  "util/array/nest": [],
  "util/clazz": [],
  "util/component": [
    "util/clazz"
  ],
  "util/format": [
    "util/number"
  ],
  "util/graphic": [],
  "util/layout": [
    "util/format",
    "util/number"
  ],
  "util/model": [
    "util/format",
    "util/number"
  ],
  "util/number": [],
  "util/quickSelect": [],
  "util/symbol": [
    "util/graphic"
  ],
  "util/throttle": [],
  "view/Chart": [
    "util/clazz",
    "util/component"
  ],
  "view/Component": [
    "util/clazz",
    "util/component"
  ],
  "visual/VisualMapping": [
    "util/number"
  ],
  "visual/dataColor": [],
  "visual/seriesColor": [],
  "visual/symbol": [],
  "visual/visualDefault": []
})