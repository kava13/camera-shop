<template>
  <div class="cards-list">
    <template v-for="(item, index) in productsList">
      <Card :product="item" @remove-product="removeProduct" :key="item.id"></Card>
    </template>
  </div>
</template>

<script>
import Card from "/components/Card";

export default {
  components: {
    Card
  },
  props: {
    productsList: Array
  },
  methods: {
    removeProduct(productId) {
      this.$emit("remove-product", productId);
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 332px - 16px + 16px);
  margin-right: -16px;
}
</style>
