var sql = require('mssql');

exports.register = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### POST Register #########################");
    	console.dir(request.payload);
	    request2.input('mmLogin', sql.VarChar(25), request.payload.username)
	    request2.input('mmName', sql.VarChar(50), request.payload.first_name)
	    request2.input('mmLast_name', sql.VarChar(50), request.payload.last_name)
	    request2.input('mmGender', sql.VarChar(50), request.payload.gender)
	    request2.input('mmPassword', sql.VarChar(60), request.payload.password)
	    request2.input('mmEmail', sql.VarChar(100), request.payload.email)
	    request2.input('mmAccion', sql.Int, 12)
	    request2.execute('dbo.ADM_User', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.login = {
    handler: function(request, reply) {
    	var request2 = new sql.Request();
    	console.dir("######################### POST Login #########################");
    	console.dir(request.payload);
	    request2.input('mmEmail', sql.VarChar(100), request.payload.username)
	    request2.input('mmPassword', sql.VarChar(60), request.payload.password)
	    request2.input('mmAccion', sql.Int, 7)
	    request2.execute('dbo.ADM_User', function(err, recordsets, returnValue, affected) {
	    	console.dir("######################### Returned #########################");
	    	console.dir(recordsets);
	        return reply(recordsets);
	    });
    }
};

exports.logout = {
    handler: function(request, reply) {

    }
};
