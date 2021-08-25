<template>
  <div>
    <section class="products">
      <div class="container">
        <div class="products-content">
          <FormBlock></FormBlock>
          <CardList :productList="sortedProductList"></CardList>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FormBlock from "/components/FormBlock";
import CardList from "/components/card-list/CardList";

export default {
  components: {
    FormBlock,
    CardList
  },
  computed: {
    sortedProductList() {
      let productList = this.$store.state.allProductsId.map(productId => this.$store.state.productsById[productId]);
      return this.sortProductList(productList);
    }
  },
  methods: {
    sortProductList(productList) {
      return productList.sort((item, nextItem) => {
        if (this.$store.state.sortingBy === "default") {
          return;
        }

        if (this.$store.state.sortingBy === "name") {
          if (item.name.toLowerCase() > nextItem.name.toLowerCase()) return 1;
          if (item.name.toLowerCase() < nextItem.name.toLowerCase()) return -1;

          return 0;
        }

        if (this.$store.state.sortingBy === "price-desc") {
          if (item.price > nextItem.price) return -1;
          if (item.price < nextItem.price) return 1;

          return 0;
        }

        if (this.$store.state.sortingBy === "price-asc") {
          if (item.price < nextItem.price) return -1;
          if (item.price > nextItem.price) return 1;

          return 0;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.products-content {
  display: flex;
  @media screen and (max-width: $max-width-mobile) {
    flex-direction: column;
  }
}
</style>
