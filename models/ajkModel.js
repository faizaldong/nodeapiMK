var db=require('../config/dbConnection'); //reference of dbConnection.js


var Task={
 	
	POST:function(Task,callback){
		return db.query("Insert into ajk values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
	},
	GET:function(callback){
		return db.query("Select * from ajk",callback);
	},
	SHOW:function(id,callback){
		return db.query("select * from ajk where Id=?",[id],callback);
	},
	PUT:function(id,Task,callback){
		return db.query("update ajk set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
	},
	DELETE:function(id,callback){
		return db.query("delete from ajk where Id=?",[id],callback);
	}

};

module.exports=Task;