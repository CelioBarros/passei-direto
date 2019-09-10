<template>
  <div class="modal">
    <b-modal :id="id" ok-only centered scrollable :size="size" :title="title">
      <slot></slot>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "lg"
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
