<template>
  <div>
    <b-modal
      :id="modalId"
      centered
      scrollable
      :size="'md'"
      :title="'Remover Disco'"
      @ok="remove"
    >
      Tem certeza que deseja remover
      <span class="font-weight-bold">{{ card.name }}</span> ?
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="md" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Salvar
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RemoveDisk",
  computed: {
    modalId() {
      return `remove-modal-${this.card.id}`;
    }
  },
  props: {
    card: {
      required: true
    }
  },
  methods: {
    ...mapActions(["deleteDisk"]),
    remove() {
      this.deleteDisk(this.card.id).then(() => {});
    }
  }
};
</script>

<style lang="scss" scoped></style>
