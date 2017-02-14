var authController = require('./controllers/authController');
var processController = require('./controllers/processController');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('Simplificacion db ...')}}},
	{method: 'POST', path: '/register', config: authController.register},
	{method: 'POST', path: '/login', config: authController.login},
	{method: 'POST', path: '/processes', config: processController.getProcesses},
	{method: 'POST', path: '/sections', config: processController.getSections},
	{method: 'POST', path: '/tasks', config: processController.getTasks},
	{method: 'POST', path: '/forms', config: processController.getForms},
	{method: 'POST', path: '/fields', config: processController.getFields},
	{method: 'POST', path: '/countries', config: processController.getCountries},
	{method: 'POST', path: '/addperson', config: processController.addPerson},
	{method: 'POST', path: '/getpersons', config: processController.getPersons}
];
