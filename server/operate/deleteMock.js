var commonRs = require('../util/commonRs');
var mockUtil = require('./mockUtil');

function *deleteMock(){
    var req = this.request;
    var params = req.body;
    console.log('[start mock]: ' + this.url +' params:'+JSON.stringify(params));

    var _api = params.api;

    mockUtil.remove(_api);

    var res = this.response;
    this.status = 200;
    this.body = commonRs.getSuccess();
}

module.exports = deleteMock;