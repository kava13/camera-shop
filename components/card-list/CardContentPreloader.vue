<template>
  <content-loader :width="400" :height="540" :speed="2" primaryColor="#f3f3f3" secondaryColor="#cccccc" uniqueKey="1">
    <rect x="0" y="0" rx="0" ry="0" width="400" height="242" />
    <rect x="16" y="259" rx="0" ry="0" width="243" height="31"></rect>
    <rect x="16" y="310" rx="0" ry="0" width="362" height="130"></rect>
    <rect x="16" y="465" rx="0" ry="0" width="170" height="37"></rect>
  </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: {
    ContentLoader
  }
};
</script>

<style></style>
