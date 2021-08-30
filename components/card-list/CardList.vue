<template>
  <transition-group class="card-list" name="card-list" tag="div">
    <template v-for="item in sortedProductList">
      <Card :product="item" :key="item.id"></Card>
    </template>
  </transition-group>
</template>

<script>
import Card from "/components/card-list/Card";

export default {
  components: {
    Card
  },
  computed: {
    sortedProductList() {
      let productList = [...this.$store.state.products];
      return this.sortProductList(productList);
    }
  },
  methods: {
    sortProductList(productList) {
      if (this.$store.state.sortingBy === "price-desc") return productList.sort((item, nextItem) => nextItem.price - item.price);
      if (this.$store.state.sortingBy === "price-asc") return productList.sort((item, nextItem) => item.price - nextItem.price);
      if (this.$store.state.sortingBy === "name")
        return productList.sort((item, nextItem) => item.name.toLowerCase().localeCompare(nextItem.name.toLowerCase()));

      return productList;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content;
  gap: 16px;
  position: relative;
  @media screen and (max-width: $max-width-laptop) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: $max-width-tablet) {
    grid-template-columns: 1fr;
  }
}
</style>
