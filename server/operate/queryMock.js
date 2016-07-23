var path = require('path');
var mockUtil = require('./mockUtil');

function* query() {
    var req = this.request;

    var rsArr = mockUtil.query();
    console.log(rsArr);
    this.status = 200;
    this.body = rsArr;
}

module.exports = query;
