var path = require('path');
var commonRs = require('../util/commonRs');
var md5 = require('../util/md5');
var dbUtil = require('../util/db');
var _ = require('lodash');

var dataRg = dbUtil.get(path.join(__dirname, '../../json/dataRegister.json'));

var util = {
    isApiExist: function(api) {
        var _find = dataRg.get('data').find({
            md5: md5(api)
        }).value();
        return !!_find;
    },
    getJsonFile: function(name) {
        return dbUtil.get(path.join(__dirname, '../../json/data/', name + '.json'))
    },
    getDataRegister: function() {
        return dataRg
    },
    add: function() {

    },
    update: function() {

    },
    query: function() {
        var _data = _.clone(dataRg.get('data').chain().value());
        var dataArr = [];

        _.map(_data, function(val) {
            console.log(val);
            var josnFile = util.getJsonFile(val.md5);
            var selectData = josnFile.get('data').value() || [];
            selectData = selectData[0];

            console.log("selectData:" + JSON.stringify(selectData) + ' ' + val.api);
            if (!selectData || !selectData.api) {

                josnFile.set('data', [{
                    api: val.api
                }]).value();

                selectData = {
                    api: val.api
                };
            }
            dataArr.push(selectData);
        })
        return dataArr;
    },
    remove: function(api) {
        dataRg.get('data').remove({
            md5: md5(api)
        }).value();

        var josnFile = util.getJsonFile(md5(api));
        josnFile.set('data', []).value();
    }
}

module.exports = util;
