var madge = require('madge');
var fs = require('fs');
var result = madge('../../../github/react/src/', {
    exclude: '__tests__|__mocks__'
    // exclude: 'zrender'
});

fs.writeFileSync('react.dependencies.json', JSON.stringify(result.tree, null, 2), 'utf-8');