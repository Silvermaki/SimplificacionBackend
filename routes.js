var userController = require('./controllers/userController');
var processController = require('./controllers/processController');


exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('Simplificacion db ...')}}},

	/*Usuarios*/
	{method: 'POST', path: '/register', config: userController.register},
	{method: 'POST', path: '/login', config: userController.login},
	{method: 'POST', path: '/logout', config: userController.logout},

    /*Procesos*/
	{method: 'POST', path: '/processes', config: processController.getProcesses},


	/*Sections*/
	{method: 'POST', path: '/sections', config: processController.getSections},
	
    /*Tasks*/
	{method: 'POST', path: '/tasks', config: processController.getTasks},

	/*Forms*/
	{method: 'POST', path: '/forms', config: processController.getForms},

	/*Fields*/
	{method: 'POST', path: '/fields', config: processController.getFields},

	/*Countries*/
	{method: 'POST', path: '/countries', config: processController.getCountries},
	{method: 'POST', path: '/Department', config: processController.getDepartment},
	

    /*Person*/
	{method: 'POST', path: '/addperson', config: processController.addPerson},
	{method: 'POST', path: '/getpersons', config: processController.getPersons},

	
    /*getCatalogos*/
	{method: 'POST', path: '/getcatalogues', config: processController.getCatalogues}


];
