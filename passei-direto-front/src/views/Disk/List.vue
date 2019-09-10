<template>
  <div class="list">
    <h1>Lista de Discos</h1>
    <b-button v-b-modal.add-modal>Launch centered modal</b-button>
    <div class="d-flex flex-wrap justify-content-between">
      <Card
        class="mb-3"
        v-for="(card, index) in cards"
        :key="index"
        :name="card.name"
        :band="card.band"
        :date="card.date"
      />
    </div>
    <Add />
  </div>
</template>

<script>
const cards = [
  { name: "Disco 1", band: "Banda 1", date: "12/12/2012" },
  { name: "Disco 2", band: "Banda 1", date: "12/12/2012" },
  { name: "Disco 3", band: "Banda 2", date: "12/12/1211" },
  { name: "Disco 4", band: "Banda 3", date: "12/12/2012" },
  { name: "Disco 5", band: "Banda 4", date: "12/12/2012" },
  { name: "Disco 6", band: "Banda 2", date: "12/12/2012" }
];
import Card from "@/components/Card";
import Add from "./Add";

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
