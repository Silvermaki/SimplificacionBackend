var authController = require('./controllers/authController');
var processController = require('./controllers/processController');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('Simplificacion db ...')}}},
	{method: 'POST', path: '/register', config: authController.register},
	{method: 'POST', path: '/login', config: authController.login},
	{method: 'GET', path: '/processes', config: processController.getProcesses},
	{method: 'GET', path: '/sections', config: processController.getSections},
	{method: 'GET', path: '/tasks', config: processController.getTasks},
	{method: 'GET', path: '/forms', config: processController.getForms},
	{method: 'GET', path: '/fields', config: processController.getFields}
];
