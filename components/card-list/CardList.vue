<template>
  <transition-group class="card-list" name="card-list" tag="div">
    <template v-for="(item, index) in productList">
      <Card :isCardListLoading="isLoading" :product="item" @remove-product="removeProduct" :key="item.id"></Card>
    </template>
  </transition-group>
</template>

<script>
import Card from "/components/card-list/Card";

export default {
  components: {
    Card
  },
  props: {
    productList: Array
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    removeProduct(productId) {
      this.$store.commit("removeProduct", productId);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: calc(100% - 332px - 16px + 16px);
  margin-right: -16px;
  @media screen and (max-width: $max-width-laptop) {
    justify-content: flex-end;
  }
  @media screen and (max-width: $max-width-mobile) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-right: 0;
  }
}
</style>
