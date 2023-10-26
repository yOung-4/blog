<script>
import { openURL } from "quasar";
export default {
  props: {
    avatar_URL: String,
    link_name: String,
    link_URL: String,
  },
  methods: {
    open_new_tab(url) {
      openURL(url);
    },
  },
};
</script>

<template>
  <div>
    <q-card
      v-ripple
      class="cursor-pointer"
      @click="open_new_tab(this.link_URL)"
    >
      <q-card-section horizontal style="margin: 2%">
        <q-avatar
          size="8vmin"
          style="margin-top: 3%; margin-bottom: 3%; margin-left: 2%"
        >
          <q-img :src="this.avatar_URL" />
        </q-avatar>
        <div class="text-h5 text-bold" style="margin-left: 4%; margin-top: 8%">
          {{ this.link_name }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
