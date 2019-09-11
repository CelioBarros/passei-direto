<template>
  <div class="card">
    <b-card>
      <b-card-title>
        {{ card.name }}
      </b-card-title>
      <b-card-sub-title>
        {{ card.band }}
      </b-card-sub-title>
      <b-card-text>
        {{ card.date }}
      </b-card-text>
      <b-button @click="$bvModal.show(`edit-modal-${card.id}`)">
        Editar
      </b-button>
      <b-button @click="$bvModal.show(`remove-modal-${card.id}`)">
        Remover
      </b-button>
    </b-card>

    <Edit :card="card" />
    <Remove :card="card" />
  </div>
</template>

<script>
import Edit from "./Edit";
import Remove from "./Remove";

export default {
  name: "Card",
  components: {
    Edit,
    Remove
  },
  props: {
    card: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 12rem;
}
</style>
