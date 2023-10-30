<script>
import { openURL } from "quasar";

export default {
  methods: {
    open_new_tab(url) {
      openURL(url);
    },
  },
};
</script>

<template>
  <div>
    <div style="float: left; width: 50%; height: 100%">
      <q-intersection transition="jump-right">
        <div>
          <q-img
            src="https://blog-storage.young-4.com/profile.png"
            width="50%"
            style="margin-left: 30%; margin-top: 25%"
          />
        </div>
      </q-intersection>
    </div>
    <div style="float: right; width: 50%">
      <q-intersection transition="jump-left">
        <div style="margin-top: 40%">
          <div class="text-h2 text-bold text-white">
            {{ $t("name") }}
          </div>
          <q-separator
            spaced
            color="white"
            size="3px"
            style="margin-right: 35%"
          />
          <div class="text-h6 text-bold text-white" style="margin-left: 0.5%">
            {{ $t("index.motto") }}
          </div>
          <div
            class="text-body1 text-white"
            style="margin-left: 0.5%; margin-top: 1%"
          >
            {{ $t("index.introduction") }}
          </div>
          <div class="row">
            <q-btn
              icon="ion-logo-twitter"
              color="blue"
              flat
              round
              @click="open_new_tab('https://twitter.com/4yOung13')"
            />
            <q-btn
              icon="ion-logo-github"
              color="white"
              flat
              round
              @click="open_new_tab('https://github.com/yOung-4')"
            />
            <q-btn
              icon="chat"
              color="green"
              flat
              round
              @click="open_new_tab('https://t.me/young_4Yo')"
            />
            <q-btn
              icon="ion-logo-youtube"
              color="red"
              flat
              round
              @click="
                open_new_tab(
                  'https://www.youtube.com/channel/UCUnCKuSQD3OA_yeKKCpLxcA'
                )
              "
            />
          </div></div
      ></q-intersection>
    </div>
  </div>
</template>
