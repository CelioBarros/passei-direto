<template>
  <div class="list">
    <b-button class="float-right add-button" v-b-modal.add-modal>
      Adicionar Disco
    </b-button>
    <b-button class="float-right filter-button" v-b-modal.filter-modal>
      Filtrar Disco
    </b-button>
    <h1>Lista de Discos</h1>
    <div class="d-flex flex-wrap justify-content-between">
      <Card
        class="mb-3"
        v-for="(disk, index) in disks"
        :key="index"
        :card="disk"
      />
    </div>
    <Add />
    <FilterModal />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "@/components/Card";
import Add from "@/components/Add";
import FilterModal from "@/components/Filter";

export default {
  name: "DiskList",
  components: {
    Add,
    Card,
    FilterModal
  },
  computed: {
    ...mapState({
      disks: state => state.disks
    })
  },
  methods: {
    ...mapActions(["getDisks"]),
    fetchDisks() {
      this.getDisks().then(() => {});
    }
  },
  created() {
    this.fetchDisks();
  }
};
</script>

<style lang="scss" scoped>
.add-button {
  background-color: #2c3e50;
}
</style>
