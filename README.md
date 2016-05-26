# ECharts graph layout extension using dagre.js


### Install

```html
<script src="echarts.min.js">
<script src="echarts-dagre.min.js">
```

Or

```
npm install echarts-dagre
```

```js
var echarts = require('echarts');
require('echarts-dagre');
```

### Usage

```js

...

chart.setOption({
    ...
    series: [{
        // Change the layout to dagre, that's all you need to do.
        layout: 'dagre',
        nodes: [...],
        links: [...]
    }]
});
```
