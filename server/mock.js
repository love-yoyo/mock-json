function *mock(){
    var req = this.request;
    console.log(this.query);
    console.log(this.request.body);
    console.log('[start mock]: ' + this.url);

    var res = this.response;
    this.status = 200;
    this.body = { test: 123 };
}

module.exports = mock;