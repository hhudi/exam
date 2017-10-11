require('babel-polyfill');
var subjectDB = require('./subjectDB');

  var cid = 2;
  var sid = 2;
  subjectDB.getChoices(cid,sid).then(function(data){
    console.log(data);
  }).catch(function(error){
    console.log("报错了 ！"+error);
  });


// 查询
/*subjectDB.getAllSubjectType().then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/

// 添加
/*var stu1 = new Student(null,'王五','男','1996-03-02',null);
studentDB.save(stu1).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/

/*var stu1 = new Student(15,'王五','男','1998-08-15',null);
studentDB.update(stu1).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/

//var id = [11];
/*studentDB.batchDelete(ids).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/

/*studentDB.query('男').then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});*/

/*var course = new Course(null,'jQuery',4);
console.log(course);
courseDB.save(course).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log("报错了 ！"+error);
});
*/