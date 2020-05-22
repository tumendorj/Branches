import axios from "axios";
const API_URL = 'http://localhost:8083';
class branchService {
  async getBranch() {
    console.log("executed service");
    return axios.get(`${API_URL}/branches`);
  }
  async saveBranch(branch) {
    return axios.post(`${API_URL}/branches`, branch)
  }
  async deleteBranch(id) {
    return axios.delete(`${API_URL}/branches/${id}`);
  }
  async updateBranch(id, branch) {
    return axios.put(`${API_URL}/branches/${id}`, branch);
  }
}
export default new branchService();
