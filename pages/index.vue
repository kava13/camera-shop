<template>
  <div>
    <Header></Header>
    <div class="page-content">
      <section class="products">
        <div class="container">
          <div class="products-content">
            <FormBlock></FormBlock>
            <CardList :productsList="sortedProductsList"></CardList>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "/components/Header";
import FormBlock from "/components/FormBlock";
import CardList from "/components/CardList";

export default {
  components: {
    Header,
    FormBlock,
    CardList
  },
  computed: {
    ...mapState({
      productsById: state => state.productsById,
      allProductsId: state => state.allProductsId,
      sortingBy: state => state.sortingBy
    }),
    sortedProductsList() {
      let productsList = this.allProductsId.map(productId => this.productsById[productId]);
      return this.sortProductsList(productsList);
    }
  },
  methods: {
    sortProductsList(productsList) {
      return productsList.sort((item, nextItem) => {
        if (this.sortingBy === "default") {
          return;
        }

        if (this.sortingBy === "name") {
          if (item.name.toLowerCase() > nextItem.name.toLowerCase()) return 1;
          if (item.name.toLowerCase() < nextItem.name.toLowerCase()) return -1;

          return 0;
        }

        if (this.sortingBy === "price-desc") {
          if (item.price > nextItem.price) return -1;
          if (item.price < nextItem.price) return 1;

          return 0;
        }

        if (this.sortingBy === "price-asc") {
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
  // margin-right: -16px;
  @media screen and (max-width: $max-width-mobile) {
    flex-direction: column;
  }
}
</style>
