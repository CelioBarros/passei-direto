export default {
  setDisks(state, disks) {
    state.disks = disks;
  },
  removeDisk(state, diskId) {
    state.disks = state.disks.filter(disk => disk.id !== diskId);
  }
};
