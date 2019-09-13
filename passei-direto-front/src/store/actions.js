import api from "@/services/api";

export default {
  createDisk(context, disk) {
    return api.createDisk(disk);
  },
  updateDisk(context, disk) {
    return api.updateDisk(disk);
  },
  getDisks({ commit }, filter = {}) {
    return api.getDisks(filter).then(({ data }) => {
      commit("setDisks", data);
      return data;
    });
  },
  deleteDisk({ commit }, diskId) {
    return api.deleteDisk(diskId).then(({ data }) => {
      commit("removeDisk", diskId);
      return data;
    });
  }
};
