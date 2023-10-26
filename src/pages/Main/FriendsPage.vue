<script>
import LinkCard from "components/LinkCard.vue";
import PageTitle from "src/components/PageTitle.vue";

export default {
  components: {
    LinkCard,
    PageTitle,
  },
};
</script>

<template>
  <div>
    <PageTitle title="link_exchange" />
    <q-intersection transition="jump-right">
      <div style="width: 60%; margin-left: 5%">
        <div style="float: left; width: 45%; margin-right: 2%">
          <LinkCard
            avatar_URL="https://r2.blog.young-4.com/links/mengguyi.png"
            :link_name="$t('link.link_mengguyi')"
            link_URL="https://blog.mengguyi.com/"
          />
        </div>
        <div style="float: right; width: 45%">
          <LinkCard
            avatar_URL="https://r2.blog.young-4.com/links/mtf-wiki-square.svg"
            :link_name="$t('link.link_mtfwiki')"
            link_URL="https://mtf.wiki/zh-cn/"
          />
        </div>
      </div>
    </q-intersection>
  </div>
</template>
