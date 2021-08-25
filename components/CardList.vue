<template>
  <transition-group class="cards-list" name="cards-list" tag="div">
    <template v-for="(item, index) in productsList">
      <Card :isCardListLoading="isLoading" :product="item" @remove-product="removeProduct" :key="item.id"></Card>
    </template>
  </transition-group>
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
.cards-list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: calc(100% - 332px - 16px + 16px);
  margin-right: -16px;
  &.loading {
    *::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: hsla(0, 0%, 100%, 0.5);
      z-index: 100;
    }
  }
}
</style>
