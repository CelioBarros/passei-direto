<template>
  <div>
    <b-modal
      :id="modalId"
      centered
      scrollable
      :size="'md'"
      :title="'Adicionar Disco'"
      @hidden="resetModal"
      @ok="save"
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
            @blur="$v.form.name.$touch()"
            :state="!$v.form.name.$error ? null : false"
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
            @blur="$v.form.band.$touch()"
            :state="!$v.form.band.$error ? null : false"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Data de lançamento:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.date"
            type="date"
            @blur="$v.form.date.$touch()"
            :state="!$v.form.date.$error ? null : false"
          >
          </b-form-input>
        </b-form-group>
      </b-form-group>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button type="button" size="md" variant="danger" @click="cancel()">
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
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "AddDisk",
  computed: {
    modalId() {
      return "add-modal";
    }
  },
  data() {
    return {
      form: {
        name: null,
        band: null,
        date: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      band: {
        required
      },
      date: {
        required
      }
    }
  },
  methods: {
    ...mapActions(["createDisk", "getDisks"]),
    save(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.$v.form.$invalid) {
        return;
      }
      const disk = {
        name: this.form.name,
        band: this.form.band,
        date: this.form.date
      };
      this.createDisk(disk).then(() => {
        this.getDisks().then(() => {});
      });
      this.$nextTick(() => {
        this.$bvModal.hide(this.modalId);
      });
    },
    resetModal() {
      this.form.name = null;
      this.form.band = null;
      this.form.date = null;
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss" scoped></style>
