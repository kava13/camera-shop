<template>
  <div class="card">
    <div class="card-img">
      <div v-if="isImgLoading" class="card-img__preloader"></div>
      <img @load="changeImgLoading" :src="isImgUrlValid ? product.imgUrl : '/img/default-img.jpg'" alt="Продукт" />
    </div>
    <div class="card-text">
      <div class="card-title">{{ product.name }}</div>
      <div class="card-description">
        {{ product.description }}
      </div>
      <div class="card-price">{{ product.formattedPrice }} руб.</div>
    </div>
    <div class="card-delete" @click="removeProduct(product.id)"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      isImgLoading: true
    };
  },
  computed: {
    isImgUrlValid() {
      return /^https?:\/\/.*\.(?:jpe?g|gif|png)$/gi.test(this.product.imgUrl);
    }
  },
  methods: {
    changeImgLoading() {
      // Имитация загрузки изображения для примера отображения прелоадера
      setTimeout(() => {
        this.isImgLoading = false;
      }, 1000);
    },
    removeProduct(productId) {
      this.$store.commit("removeProduct", productId);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  color: $black;
  background-color: $primary;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 20px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 3%) 0px 12px 13px,
      rgb(0 0 0 / 9%) 0px -3px 5px;
    .card-delete {
      transform: scale(1);
    }
  }
  .card-img {
    position: relative;
    text-align: center;
    margin-bottom: 16px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .card-text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 24px;
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
      word-break: break-all;
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
    transform: scale(0);
    transition: transform 0.25s ease;
  }
}
</style>
