<template>
  <div>
    <section class="products">
      <div class="container">
        <div class="products-content">
          <FormBlock></FormBlock>
          <CardList></CardList>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FormBlock from "@/components/FormBlock.vue";
import CardList from "@/components/card-list/CardList.vue";

export default {
  components: {
    FormBlock,
    CardList,
  },
};
</script>

<style lang="scss" scoped>
.products-content {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: $max-width-mobile) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
