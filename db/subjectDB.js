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
		var sql = 'update tbl_exam_subject set checkState="'+data.text+'" where id='+data.id;
		return pool.execute(sql);
	},
	// 保存题目
	saveSubject(subject){
		var sql = "insert into tbl_exam_subject values(null,'"
		+subject.analysis+"','"
		+subject.answer+"','"
		+subject.checkState+"','"
		+subject.stem+"','"
		+subject.uploadTime+"',"
		+subject.department_id+","
		+subject.subjectLevel_id+","
		+subject.subjectType_id+","
		+subject.topic_id+",null)";
		return pool.execute(sql);
	},
	// 保存选项
	saveChoices(content,correct,sub_id){
		var correc = +correct;
		var sql = "insert into tbl_exam_choice values(null,'"+content+"',"+correct+","+sub_id+")";
		return pool.execute(sql);
	},
	getMaxId(){
		var sql = 'select max(id) id from tbl_exam_subject';
		return pool.execute(sql);
	},
	// 根据条件查找所有题目
	getAllSubjects(typeId,lvId,depId,topId){
		var sql = 'select * from tbl_exam_subject where subjectType_id="'
		+typeId+'" and subjectLevel_id="'
		+lvId+'" and department_id="'
		+depId+'" and topic_id="'
		+topId+'"';
		return pool.execute(sql);
	},
	getChoices(cSub_id,sub_id){
		// 题目id与选项id对应
		var sql = 'select tbl_exam_choice.content,tbl_exam_choice.correct from tbl_exam_choice,tbl_exam_subject where tbl_exam_choice.subject_id='
		+cSub_id+' AND tbl_exam_subject.id='+sub_id+' and tbl_exam_subject.id=tbl_exam_choice.subject_id';
		return pool.execute(sql);
	},
	querySubject(keys){
		var sql = 'select * from tbl_exam_subject where stem like "%'+keys+'%"';
		return pool.execute(sql);
	},
	// 查找所有题目
	/*getAllSubjects(){
		var sql = 'select * from tbl_exam_subject';
		return pool.execute(sql);
	}*/
	// 根据删除题目
	delSubject(id){
		var sql = 'delete from tbl_exam_subject where id='+id;
		return pool.execute(sql);
	}
}


