<template>
  <div class="default-layout">
    <Header></Header>
    <Nuxt class="page-content" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
