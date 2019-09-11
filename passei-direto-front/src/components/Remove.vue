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
    remove() {}
  }
};
</script>

<style lang="scss" scoped></style>
