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

exports.getCatalogues = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Catalogues #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)
	    request2.input('Nombre', sql.VarChar(250), request.payload.name)
	    request2.execute('dbo.CTL_GetCatalogue', function(err, recordsets, returnValue, affected) {
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

exports.getCountries = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Countries #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.execute('dbo.ADM_Country', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.addPerson = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### ADD Person #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 0)
	    request2.input('mmName', sql.NVarChar(50), request.payload.nombre)
	    request2.input('mmLast_name', sql.NVarChar(50), request.payload.apellido)
	    request2.input('mmMajor', sql.NVarChar(50), request.payload.profesion)
	    request2.input('mmMarital_status', sql.NVarChar(50), request.payload.estadoCivil)
	    request2.input('mmCitizenship', sql.NVarChar(50), request.payload.nacionalidad)
	    request2.input('mmIdentification_type', sql.NVarChar(50), request.payload.tipoIdentificacion)
	    request2.input('mmIdentification_number', sql.NVarChar(50), request.payload.numeroIdentificacion)
	    request2.input('mmEmail', sql.NVarChar(100), request.payload.correo)
	    request2.input('mmAddress', sql.NVarChar(255), request.payload.direccion)
	    request2.execute('dbo.ADM_Persons', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};


exports.getPersons = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### GET Persons #########################");
    	console.dir(request.payload);
	    request2.input('mmSeccion', sql.NVarChar(40), request.payload.hash)//request.payload.session)
	    request2.input('mmAccion', sql.Int, 4)
	    request2.execute('dbo.ADM_Persons', function(err, recordsets, returnValue, affected) {
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
	    request2.input('mmId_section', sql.Int, request.payload.id)
	    request2.execute('dbo.ADM_Field', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};