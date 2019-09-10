<template>
  <div class="card">
    <b-card>
      <b-card-title>
        {{ name }}
      </b-card-title>
      <b-card-sub-title>
        {{ band }}
      </b-card-sub-title>
      <b-card-text>
        {{ date }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    band: {
      type: String,
      default: "",
      required: true
    },
    date: {
      type: String,
      default: "00/00/0000",
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
