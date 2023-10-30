<script>
import PageTitle from "src/components/PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      raw_data: Object,
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
          `https://blog-storage.young-4.com/blog_data/${this.$i18n.locale}/contents.json`,
          { method: "get" }
        )
          .then((response) => response.json())
          .then((data) => (this.raw_data = data));
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div>
    <PageTitle title="directory.contents" />
    <div style="float: left; width: 45%; margin-left: 5%">
      <q-intersection transition="jump-right">
        <q-card
          v-ripple
          class="cursor-pointer"
          style="margin-top: 1%"
          v-for="article of this.raw_data.contents"
          :key="article.id"
          @click="
            this.$router.push({ name: 'blog', params: { id: article.id } })
          "
        >
          <q-card-section>
            <div class="text-h5 text-bold">{{ article.title }}</div>
            <div class="row" style="margin-top: 1%; margin-bottom: 0%">
              <div v-for="tag in article.tags" :key="tag">
                <q-chip :label="tag" dense />
              </div>
              <div class="text-body2 text-weight-light" style="margin: 1%">
                {{ article.time }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
    <div style="float: right; width: 50%">
      <q-intersection transition="jump-left">
        <q-card style="margin-left: 30%; margin-right: 10%; margin-top: 2%">
          <q-card-section class="column items-center" style="margin-top: 1%">
            <q-avatar size="15vmin">
              <q-img src="https://blog-storage.young-4.com/profile.png" />
            </q-avatar>
            <div class="text-center text-h6 text-bold">{{ $t("name") }}</div>
            <div>
              <div class="text-body1 text-center" style="display: inline">
                {{ $t("directory.total_article_num") }}
              </div>
              <div
                class="text-body1 text-bold text-center"
                style="display: inline"
              >
                {{ this.raw_data.articles_number }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>
