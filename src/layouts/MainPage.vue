<script>
import NavBar from "components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <NavBar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white"> </q-footer>
  </q-layout>
</template>
