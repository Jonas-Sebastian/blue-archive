import axios from 'axios';

const API_URL_TOTAL_ASSAULT = 'http://127.0.0.1:8000/api/TotalAssault/';
const API_URL_STUDENT = 'http://127.0.0.1:8000/api/Students/';

class TotalAssaultService {
  getAllTotalAssault() {
    return axios.get(API_URL_TOTAL_ASSAULT);
  }

  getTotalAssault(id) {
    return axios.get(`${API_URL_TOTAL_ASSAULT}${id}/`);
  }

  createTotalAssault(data) {
    return axios.post(API_URL_TOTAL_ASSAULT, data);
  }

  updateTotalAssault(id, data) {
    return axios.put(`${API_URL_TOTAL_ASSAULT}${id}/`, data);
  }

  deleteTotalAssault(id) {
    return axios.delete(`${API_URL_TOTAL_ASSAULT}${id}/`);
  }

  // New methods for Students
  getAllStudents() {
    return axios.get(API_URL_STUDENT);
  }

  getStudent(id) {
    return axios.get(`${API_URL_STUDENT}${id}/`);
  }

  createStudent(data) {
    return axios.post(API_URL_STUDENT, data);
  }

  updateStudent(id, data) {
    return axios.put(`${API_URL_STUDENT}${id}/`, data);
  }

  deleteStudent(id) {
    return axios.delete(`${API_URL_STUDENT}${id}/`);
  }
}

export default new TotalAssaultService();