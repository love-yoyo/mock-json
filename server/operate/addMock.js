var commonRs = require('../util/commonRs');
var md5 = require('../util/md5');
var dbUtil = require('../util/db');
var mockUtil = require('./mockUtil');

function* add() {
    var req = this.request;
    var params = req.body;

    if (!params.api) {
        this.status = 200;
        this.body = commonRs.getError('api字段不能为空');
        return
    }

    var _api = params.api;
    var _md5 = md5(_api);

    var res = this.response;

    var _find = mockUtil.isApiExist(_api);

    if (!_find) {
        var dr = mockUtil.getDataRegister();
        dr.get('data').push({
            md5: _md5,
            url: _api
        });
        var json = mockUtil.getJsonFile(_md5);
        json.get('data').push(params);
        this.status = 200;
        this.body = commonRs.getSuccess('URL: ' + _api + ' 添加成功');
    } else {
        this.status = 200;
        this.body = commonRs.getError('URL: ' + _api + ' 已经存在，添加失败');
    }
}

module.exports = add;
