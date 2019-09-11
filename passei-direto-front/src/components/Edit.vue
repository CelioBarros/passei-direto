<template>
  <div>
    <b-modal
      :id="modalId"
      centered
      scrollable
      :size="'md'"
      :title="'Editar Disco'"
      @show="resetModal"
      @ok="save"
    >
      <b-form-group @submit="save">
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
import { required } from "vuelidate/lib/validators";

export default {
  name: "EditDisk",
  props: {
    card: {
      required: true
    }
  },
  computed: {
    modalId() {
      return `edit-modal-${this.card.id}`;
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
    save() {
      console.log(this.form);
    },
    resetModal() {
      this.form.name = this.card.name;
      this.form.band = this.card.band;
      this.form.date = this.card.date;
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss" scoped></style>
