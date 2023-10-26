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
          `https://r2.blog.young-4.com/blog_data/${this.language}/${this.$route.params.id}.md`
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
    <q-intersection transition="jump-right">
      <q-card style="margin-top: 3%; margin-left: 3%; margin-right: 35%">
        <q-card-section>
          <div v-html="this.new_html" class="markdown-body"></div>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
</template>

<style>
@import "github-markdown-css/github-markdown-light.css";
</style>
