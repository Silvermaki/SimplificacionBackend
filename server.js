var sql = require('mssql');
var hapi = require('hapi');
var inert = require('inert');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
    port: ~~process.env.PORT || 8000,
    routes: { cors:{origin: ['*'],additionalHeaders: ['cache-control', 'x-requested-with', 'accept-language']}}});

var config = {
    user: 'admin',
    password: 'Simplificacion!3261',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'simplificacion',
}

sql.connect(config).then(function() {
  console.log("Connection with database succeeded.");
}).catch(function(err) {
  console.log("Connection to database error.");
  console.log(err);
});

server.register([inert, auth], function(err){

	server.route(routes.endpoints);

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
