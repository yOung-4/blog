<script>
import PageTitle from "src/components/PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
};
</script>

<template>
  <div>
    <PageTitle title="about" />
    <q-btn
      :label="$t('about.label_survey')"
      color="primary"
      style="margin-left: 5%"
      :to="{ name: 'survey' }"
    />
  </div>
</template>
