<template>
  <div class="list">
    <h1>Lista de Discos</h1>
    <b-button v-b-modal.add-modal>Adicionar Disco</b-button>
    <div class="d-flex flex-wrap justify-content-between">
      <Card
        class="mb-3"
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
      />
    </div>
    <Add />
  </div>
</template>

<script>
const cards = [
  { id: 1, name: "Disco 1", band: "Banda 1", date: "2012-12-12" },
  { id: 2, name: "Disco 2", band: "Banda 1", date: "2012-12-12" },
  { id: 3, name: "Disco 3", band: "Banda 2", date: "2012-12-12" },
  { id: 4, name: "Disco 4", band: "Banda 3", date: "2012-12-12" },
  { id: 5, name: "Disco 5", band: "Banda 4", date: "2012-12-12" },
  { id: 6, name: "Disco 6", band: "Banda 2", date: "2012-12-12" }
];
import Card from "@/components/Card";
import Add from "@/components/Add";

export default {
  name: "DiskList",
  components: {
    Add,
    Card
  },
  data() {
    return {
      cards
    };
  }
};
</script>

<style lang="scss" scoped></style>
