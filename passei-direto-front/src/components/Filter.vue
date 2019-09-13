<template>
  <div>
    <b-modal
      :id="modalId"
      centered
      scrollable
      :size="'md'"
      :title="'Filtrar Disco'"
      @ok="filter"
    >
      <b-form-group>
        <b-form-group
          id="input-group-1"
          label="Nome do disco:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Nome do disco"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Nome da banda:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.band"
            type="text"
            placeholder="Nome da banda"
          >
          </b-form-input>
        </b-form-group>
      </b-form-group>
      <template v-slot:modal-footer="{ ok }">
        <b-button size="md" variant="success" @click="ok()">
          Filtrar
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterDisk",
  computed: {
    modalId() {
      return "filter-modal";
    }
  },
  data() {
    return {
      form: {
        name: null,
        band: null
      }
    };
  },
  methods: {
    ...mapActions(["getDisks"]),
    filter(bvModalEvt) {
      bvModalEvt.preventDefault();
      const filter = {};
      if (this.form.name) filter.name = this.form.name;
      if (this.form.band) filter.band = this.form.band;
      console.log(filter);
      this.getDisks(filter).then(() => {});
      this.$nextTick(() => {
        this.$bvModal.hide(this.modalId);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
