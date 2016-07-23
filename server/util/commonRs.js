var SUCCESS_CODE = '001';
var ERROR_CODE = '002';

var SUCCESS_MSG = '成功';
var ERROR_MSG = '失败';


module.exports = {
    getError: function(msg) {
        return {
            errorCode: ERROR_CODE,
            errorMsg: msg || ERROR_MSG
        }
    },
    getSuccess: function(msg) {
        return {
            errorCode: SUCCESS_CODE,
            errorMsg: msg || SUCCESS_MSG
        }
    }

}
