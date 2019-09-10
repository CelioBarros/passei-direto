<template>
  <div class="list">
    <h1>Lista de Discos</h1>
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "DiskList",
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped></style>
