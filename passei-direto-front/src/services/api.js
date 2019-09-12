import axios from "axios";

const axiosPassei = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

export default {
  async createDisk(disk) {
    return axiosPassei.post("disk", disk);
  },
  async deleteDisk(id) {
    return axiosPassei.delete(`disk/${id}`);
  },
  async getDisks() {
    return axiosPassei.get("disk");
  },
  async updateDisk(disk) {
    return axiosPassei.patch(`disk/${disk.id}`, disk);
  }
};
