import axios from 'axios';
export default {
  // 验证账号密码
  checkUser(callback, obj) {
    axios.get('https://dbcd.qfstudio.net/login', {
      params: obj
    })
    .then(function(response) {
      callback(response.data.token);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 上传学院信息
  uploadCollegeInfo(obj, token) {
    obj.token = token;
    axios.post(`https://dbcd.qfstudio.net/write/college`, obj)
    .catch(function(error) {
      alert(error);
    })
  },
  // 上传教师信息
  uploadTeacherInfo(obj, token, callback) {
    obj = Object.assign(obj, {token: token});
    axios.post(`https://dbcd.qfstudio.net/write/teacher`, obj)
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 上传学生信息
  uploadStudentInfo(obj, token, callback) {
    obj = Object.assign(obj, {token: token});
    axios.post(`https://dbcd.qfstudio.net/write/student`, obj)
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 上传课程信息
  uploadClassInfo(obj, token, callback) {
    obj.token = token;
    axios.post(`https://dbcd.qfstudio.net/write/course`, obj)
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 学生自主选课 
  selectCourse(courseId, studentId, token, callback) {
    axios.get(`https://dbcd.qfstudio.net/register/course?courseId=${courseId}&studentId=${studentId}&token=${token}`)
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取学院信息
  getCollegeInfo(callback, token) {
    axios.get(`https://dbcd.qfstudio.net/read/college?token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取所有教师信息
  getTeacherInfo(callback, token) {
    axios.get(`https://dbcd.qfstudio.net/read/teacher?token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取所有学生信息
  getStudentInfo(callback, token) {
    axios.get(`https://dbcd.qfstudio.net/read/student?token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取所有课程信息
  getClassInfo(callback, token) {
    axios.get(`https://dbcd.qfstudio.net/read/course?token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取单个学生信息
  getStudent(callback, id, token) {
    axios.get(`https://dbcd.qfstudio.net/read/student/one?studentId=${id}&token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 获取单个教师信息
  getTeacher(callback, id, token) {
    axios.get(`https://dbcd.qfstudio.net/read/teacher/one?jobId=${id}&token=${token}`)
    .then(function(response) {
      callback(response.data.data);
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 删除学院信息
  deleteCollegeInfo(obj, token) {
    obj.token = token;
    axios.post('https://dbcd.qfstudio.net/delete/class', obj)
    .catch(function(error) {
      alert(error);
    })
  },
  // 删除学生信息
  deleteStudent(id, type, token, callback) {
    axios.post('https://dbcd.qfstudio.net/delete/both', {id, type, token})
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 删除课程信息
  deleteCourse(id, token, callback) {
    axios.post(`https://dbcd.qfstudio.net/delete/course`, {id, token})
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
  // 学生退选课程
  cancelCourse(courseId, studentId, token, callback) {
    axios.get(`https://dbcd.qfstudio.net/cancel/course?courseId=${courseId}&studentId=${studentId}&token=${token}`)
    .then(function() {
      callback();
    })
    .catch(function(error) {
      alert(error);
    })
  },
}