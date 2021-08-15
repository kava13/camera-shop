<template>
  <div class="card">
    <div class="card-img">
      <img :src="product.imgUrl" alt="Камера" />
    </div>
    <div class="card-text">
      <div class="card-title">{{ product.name }}</div>
      <div class="card-description">
        {{ product.description }}
      </div>
      <div class="card-price">{{ product.price }} руб.</div>
    </div>
    <div class="card-delete" @click="removeProductHandler(product.id)"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    removeProductHandler(productIdForDelete) {
      this.$emit("remove-product", productIdForDelete);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc((100% - 48px) / 3);
  max-width: 332px;
  color: $black;
  background-color: $primary;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-right: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: $max-width-laptop) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (max-width: $max-width-tablet) {
    width: 100%;
  }
  @media screen and (max-width: $max-width-mobile) {
    margin-right: 0;
  }
  .card-img {
    text-align: center;
    margin-bottom: 16px;
    height: 200px;
  }
  .card-text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 24px;
    overflow-wrap: break-word;
    .card-title {
      font-size: 20px;
      line-height: 25px;
      font-weight: 600;
      margin-bottom: 16px;
    }
    .card-description {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
    }
    .card-price {
      margin-top: auto;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
  .card-delete {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 32px;
    height: 32px;
    background-color: $red;
    background-image: url("/img/delete.svg");
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
