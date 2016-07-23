var commonRs = require('../util/commonRs');
var md5 = require('../util/md5');
var dbUtil = require('../util/db');
var mockUtil = require('./mockUtil');

function* update() {
    var req = this.request;
    var params = req.body;
    // console.log(params);

    if (!params.api) {
        this.status = 500;
        this.body = commonRs.getError('api字段不能为空');
        return
    }

    var _api = params.api;
    var _md5 = md5(_api);

    var _find = mockUtil.isApiExist(_api);
    if (!_find) {
        var dr = mockUtil.getDataRegister();
        var b = dr.get('data').push({
            md5: _md5,
            api: _api
        }).value();
        console.log('b:' + JSON.stringify(params));
        var json = mockUtil.getJsonFile(_md5);
        json.set('data', [params]).value();
        this.status = 200;
        this.body = commonRs.getSuccess('URL: ' + _api + ' 添加成功');
    } else {
        var json = mockUtil.getJsonFile(_md5);
        console.log('params:' + JSON.stringify(params));
        json.get('data')
            .chain()
            .find({
                api: params.api
            })
            .assign(params)
            .value();
        this.status = 200;
        this.body = commonRs.getError('更新成功');
    }
}

module.exports = update;
