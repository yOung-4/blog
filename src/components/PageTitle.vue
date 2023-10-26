<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <div>
    <q-intersection transition="jump-right">
      <div
        class="text-h2 text-bold text-white"
        style="margin-left: 5%; margin-top: 5%"
      >
        {{ $t(this.title) }}
      </div>
      <q-separator
        color="white"
        style="
          margin-top: 1%;
          margin-bottom: 2%;
          margin-left: 4%;
          margin-right: 43%;
        "
      />
    </q-intersection>
  </div>
</template>
