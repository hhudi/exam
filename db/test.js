require('babel-polyfill');
var subjectDB = require('./subjectDB');

/*  var cid = 2;
  var sid = 2;
  subjectDB.getChoices(cid,sid).then(function(data){
    console.log(data);
  }).catch(function(error){
    console.log("报错了 ！"+error);
  });*/

  /*var subject = {
      analysis:'ddddd',
      answer:'answersss',
      checkState:'未审核',
      stem:'stemss',
      uploadTime:mydate,
      subjectType_id:'1',
      subjectLevel_id:'1',
      department_id:'1',
      topic_id:'1',
      user_id:null
  }*/
  var aa = "'f','f','f','f'";
  console.log(aa.split(','));
  var content = ['choice1','choice2','choice3','choice4'];
  var correct = [0,1,0,0];
  var sub_id = [4];
  subjectDB.saveChoices(content,correct,sub_id).then(function(data){
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