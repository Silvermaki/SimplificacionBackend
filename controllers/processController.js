var sql = require('mssql');

exports.getProcesses = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Processes #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.execute('dbo.ADM_Process', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.getSections = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Sections #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.input('mmId_process', sql.Int, request.payload.id)
	    request2.execute('dbo.ADM_Section', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.getTasks = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Tasks #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.input('mmId_section', sql.Int, request.payload.id)
	    request2.execute('dbo.ADM_Task', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.getForms = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Forms #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.input('mmId_task', sql.Int, request.payload.id)
	    request2.execute('dbo.ADM_Form', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.getFields = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Fields #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.input('mmId_form', sql.Int, request.payload.id)
	    request2.execute('dbo.ADM_Field', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};