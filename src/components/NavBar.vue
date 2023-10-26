<script>
import { openURL } from "quasar";
export default {
  data() {
    return {
      ico_color: "white",
    };
  },
  methods: {
    open_new_tab() {
      openURL("https://github.com/");
    },
    change_language(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>

<template>
  <div>
    <q-toolbar class="shadow-10">
      <q-toolbar-title
        shrink
        class="text-bold q-ml-xs"
        @click="$router.push({ name: 'index' })"
        >{{ $t("title") }}</q-toolbar-title
      >
      <q-separator vertical inset color="white" />
      <q-tabs shrink class="q-ml-md">
        <q-route-tab name="home" :label="$t('home')" :to="{ name: 'index' }" />
        <q-route-tab
          name="about"
          :label="$t('about')"
          :to="{ name: 'about' }"
        />
        <q-route-tab
          name="blog"
          :label="$t('blog')"
          :to="{ name: 'directory' }"
        />
        <q-route-tab
          name="friends"
          :label="$t('link_exchange')"
          :to="{ name: 'friends' }"
        />
      </q-tabs>
      <q-space />
      <q-btn icon="translate" flat class="q-mr-xs">
        <q-menu
          auto-close
          :offset="[0, 12]"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list>
            <q-item clickable @click="change_language('en-US')">
              <q-item-section>English</q-item-section>
              <q-item-section side v-if="this.$i18n.locale == 'en-US'">
                <q-icon name="done" color="green-8" />
              </q-item-section>
            </q-item>
            <q-item clickable @click="change_language('zh-CN')">
              <q-item-section> 简体中文 </q-item-section>
              <q-item-section side v-if="this.$i18n.locale == 'zh-CN'">
                <q-icon name="done" color="green-8" />
              </q-item-section>
            </q-item>
            <q-item clickable @click="change_language('zh-TW')">
              <q-item-section>繁體中文</q-item-section>
              <q-item-section side v-if="this.$i18n.locale == 'zh-TW'">
                <q-icon name="done" color="green-8" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-icon
        name="ion-logo-github"
        size="sm"
        :color="ico_color"
        class="q-mr-md"
        @mouseover="ico_color = 'black'"
        @mouseleave="ico_color = 'white'"
        @click="open_new_tab"
      />
    </q-toolbar>
  </div>
</template>
