var koa = require('koa');
var route = require('koa-route');
var logger = require('koa-logger');
var static = require('koa-static');
var bodyParser = require('koa-bodyparser');

var path = require('path');
var devip = require('dev-ip');
var portscanner = require('portscanner');

var args = process.argv.splice(2);

var HOST = (devip() || ['127.0.0.1'])[0];

var getPort = function(cb) {
    portscanner.findAPortNotInUse(8090, 8091, '127.0.0.1', function(error, port) {
        cb(port);
    })
}

var app = koa();

app.use(logger());
app.use(bodyParser());


app.use(static(path.join(__dirname, './client')));
app.use(static(path.join(__dirname, './bower_components')));

app.use(route.all('/api/query/:method', require('./server/operate/queryMock')));
app.use(route.all('/api/add', require('./server/operate/addMock')));
app.use(route.all('/api/delete', require('./server/operate/deleteMock')));
app.use(route.all('/api/update', require('./server/operate/updateMock')));
app.use(route.all('/mock/*', require('./server/mock')));

getPort(function(port){
    app.listen(port);
    console.log('server at http://' + HOST + ':' + port);
});


