var path = require('path');
var low = require('lowdb');
var storage = require('lowdb/lib/file-async');
var md5 = require('./md5');

var dataRg = low(path.join(__dirname, '../../json/dataRegister.json'), {
    storage: storage
});

module.exports = {
    get: function(jsonPath) {
        return low(jsonPath, {
            storage: storage
        })
    }
}
