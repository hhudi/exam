let express = require('express');
require('babel-polyfill');
let route = express.Router();
let subjectDB = require('../db/subjectDB');

// 获取所有题目类型
route.get('/getAllSubjectType',(req,resp)=>{
	subjectDB.getAllSubjectType().then(function(data){
	  resp.send(data);
	}).catch(function(error){
	  resp.send("报错了 ！"+error);
	});
});
// 获取所有题目难度
route.get('/getAllSubjectLevel',(req,resp)=>{
	subjectDB.getAllSubjectLevel().then(function(data){
	  resp.send(data);
	}).catch(function(error){
	  resp.send("报错了 ！"+error);
	});
});
// 获取所有方向
route.get('/getAllDepartmentes',(req,resp)=>{
	subjectDB.getAllDepartmentes().then(function(data){
	  resp.send(data);
	}).catch(function(error){
	  resp.send("报错了 ！"+error);
	});
});
// 获取所有知识点
route.get('/getAllTopics',(req,resp)=>{
	subjectDB.getAllTopics().then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
// 根据方向id获取该方向下的所有知识点
route.post('/getDepartmentTopics',(req,resp)=>{
	subjectDB.getDepartmentTopics(req.query.id).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
route.post('/getOneSubjects',(req,resp)=>{
	console.log(req.body);
	subjectDB.getOneSubjects(req.body.dataId).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
// 更新信息
route.post('/updOneSubjects',(req,resp)=>{
	subjectDB.updOneSubjects(req.body).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});

// 查询所有题目信息
route.post('/getAllSubjects',(req,resp)=>{
	//console.log(JSON.parse(req.body.ids));
	var ids = JSON.parse(req.body.ids);
	var typeId = ids[0];
	var lvId = ids[1];
	var depId = ids[2];
	var topId = ids[3];
	console.log(typeId,lvId,depId,topId);
	subjectDB.getAllSubjects(typeId,lvId,depId,topId).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});

// 删除题目
route.post('/delSubject',(req,resp)=>{
	subjectDB.delSubject(req.body.id).then(function(data){
		resp.send(data);
	}).catch(function(error){
		console.log(error);
		resp.send("报错了 ！"+error);
	});
});
// 题干关键字查询
route.post('/querySubject/:keys',(req,resp)=>{
	subjectDB.querySubject(req.body.keys).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
// 保存题目
route.post('/saveSubject',(req,resp)=>{
	subjectDB.saveSubject(req.body).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
// 保存选项
route.post('/saveChoices',(req,resp)=>{
	var content = req.body.content.split(',');
	var correct = req.body.correct.split(',');
	var id = +req.body.id;
	for(var i=0;i<content.length;i++){
		subjectDB.saveChoices(content[i],correct[i],id).then(function(data){
			return;
			resp.send(data);
		}).catch(function(error){
			resp.send("报错了 ！"+error);
		});
	}	
});
route.post('/getChoices',(req,resp)=>{
	subjectDB.getChoices(req.body.dataId,req.body.choiceId).then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});
// 获取题目列表中的最大id
route.get('/getMaxId',(req,resp)=>{
	subjectDB.getMaxId().then(function(data){
		resp.send(data);
	}).catch(function(error){
		resp.send("报错了 ！"+error);
	});
});

module.exports = route;