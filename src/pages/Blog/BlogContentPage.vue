<script>
import markdown_it from "markdown-it";
const markdown = markdown_it();

export default {
  data() {
    return {
      new_html: String,
      markdown: markdown_it(),
    };
  },
  computed: {
    language() {
      return this.$i18n.locale;
    },
  },
  watch: {
    language: {
      handler() {
        fetch(
          `https://blog-storage.young-4.com/blog_data/${this.language}/${this.$route.params.id}.md`
        )
          .then((response) => response.text())
          .then((data) => (this.new_html = this.markdown.render(data)));
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div>
    <div style="float: left; width: 60%">
      <q-intersection transition="jump-right">
        <q-card style="margin-left: 3%; margin-top: 3%">
          <q-card-section>
            <div
              v-html="this.new_html"
              class="markdown-body text-notoserifsc"
            ></div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
    <div style="float: right; width: 40%">
      <q-intersection transition="jump-left">
        <q-card style="margin-left: 30%; margin-right: 10%; margin-top: 20%">
          <q-card-section class="column items-center" style="margin-top: 1%">
            <q-avatar size="15vmin">
              <q-img src="https://blog-storage.young-4.com/profile.png" />
            </q-avatar>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<style>
@import "github-markdown-css/github-markdown-light.css";
</style>
