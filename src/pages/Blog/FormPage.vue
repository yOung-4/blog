<script>
import { is } from "quasar";

export default {
  data() {
    return {
      email: undefined,
      gender: undefined,
      is_student: undefined,
      suggestion: undefined,
    };
  },
};
</script>

<template>
  <div>
    <q-card style="margin: 5%; margin-right: 50%">
      <q-card-section>
        <q-form>
          <q-input v-model="email" label="email" style="margin-right: 5%" />
          <q-select
            v-model="gender"
            :options="[
              'male',
              'female',
              'non-binary',
              'others',
              'prefer not to say',
            ]"
            label="gender"
          />
          <div class="text-h6" style="margin-top: 2%">
            I am a student: {{ is_student }}
          </div>
          <q-radio v-model="is_student" val="yes" label="no" />
          <q-radio v-model="is_student" val="no" label="yes" />
          <q-input
            v-model="suggestion"
            autogrow
            label="Anything you want to tell us about"
          />
          <q-btn
            label="submit"
            type="submit"
            color="primary"
            style="margin-top: 2%"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
