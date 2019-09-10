<template>
  <div>
    <Modal :size="'md'" :id="'add-modal'" :title="'Adicionar Disco'"></Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "DiskList",
  components: {
    Modal
  }
};
</script>

<style lang="scss" scoped></style>
