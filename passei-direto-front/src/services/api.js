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
  async getDisks(filter) {
    const filtering = Object.keys(filter)
      .map(key => `${key}=${filter[key]}`)
      .join(",");
    return axiosPassei.get(`disk?${filtering}`);
  },
  async updateDisk(disk) {
    return axiosPassei.patch(`disk/${disk.id}`, disk);
  }
};
