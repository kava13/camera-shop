<template>
  <div>
    <Header></Header>
    <div class="page-content">
      <section class="products">
        <div class="container">
          <div class="products-content">
            <FormBlock></FormBlock>
            <CardList></CardList>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "/components/Header";
import FormBlock from "/components/FormBlock";
import CardList from "/components/CardList";

export default {
  components: {
    Header,
    FormBlock,
    CardList
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
