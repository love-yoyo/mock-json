var koa = require('koa');
var route = require('koa-route');
var logger = require('koa-logger');
var static = require('koa-static');
var bodyParser = require('koa-bodyparser');

var path = require('path');
var devip = require('dev-ip');

var args = process.argv.splice(2);

var HOST = (devip() || ['127.0.0.1'])[0];
var PORT = '8090';
for (var i = 0; i < args.length; i++) {
    var _arg = args[i];
    if (_arg == '-p') {
        PORT = args[i + 1];
    }
}

var app = koa();

app.use(logger());
app.use(bodyParser());


app.use(static(path.join(__dirname, './client')));
app.use(static(path.join(__dirname, './bower_components')));
app.use(route.all('/mock/*', mock));

function* mock() {
    var req = this.request;
    console.log(this.query);
    console.log(this.request.body);
    console.log('[start mock]: ' + this.url);

    var res = this.response;
    this.status = 404;
    this.body = { test: 123 };

}

app.listen(PORT);
console.log('server at http://' + HOST + ':' + PORT);
