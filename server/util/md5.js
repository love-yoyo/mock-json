var crypto = require('crypto');

function generate(text) {
    var md5 = crypto.createHash('md5');
    var hex = md5.update(text).digest('hex');
    return hex;
}

module.exports = generate
