let pool = require('./pool');

module.exports = {
	getAllSubjectType(){
		var sql = 'select * from tbl_exam_subjecttype';
		return pool.execute(sql);
	},
	getAllSubjectLevel(){
		var sql = 'select * from tbl_exam_subjectlevel';
		return pool.execute(sql);
	},
	getAllDepartmentes(){
		var sql = 'select * from tbl_exam_epartment';
		return pool.execute(sql);
	},
	getAllTopics(){
		var sql = 'select * from tbl_exam_topic';
		return pool.execute(sql);
	},
	getDepartmentTopics(id){
		var sql = 'select * from tbl_exam_topic where id='+id;
		return pool.execute(sql);
	},
	getOneSubjects(id){
		var sql = 'select * from tbl_exam_subject where id='+id;
		return pool.execute(sql);
	},
	updOneSubjects(data){
		console.log(data);
		var sql = 'update tbl_exam_subject set checkState="'+data.text+'" where id='+data.id;
		return pool.execute(sql);
	},
	// 保存题目
	/*saveSubject(subject){
		var sql = "insert into tbl_exam_subject(analysis,answer,checkState,stem) values('"
		+subject.analysis+"','"
		+subject.answer+"','"
		+subject.checkState+"','"
		+subject.stem+"')";
		return pool.execute(sql);
	},*/
	// 根据条件查找所有题目
	getAllSubjects(typeId,lvId,depId,topId){
		var sql = 'select * from tbl_exam_subject where subjectType_id="'
		+typeId+'" and subjectLevel_id="'
		+lvId+'" and department_id="'
		+depId+'" and topic_id="'
		+topId+'"';
		return pool.execute(sql);
	}
	// 查找所有题目
	/*getAllSubjects(){
		var sql = 'select * from tbl_exam_subject';
		return pool.execute(sql);
	}*/

}