<template>
  <div class="card">
    <content-loader v-if="!isLoading" :width="400" :height="540" :speed="2" primaryColor="#f3f3f3" secondaryColor="#cccccc" uniqueKey="1">
      <rect x="0" y="0" rx="0" ry="0" width="400" height="242" />
      <rect x="16" y="259" rx="0" ry="0" width="243" height="31"></rect>
      <rect x="16" y="310" rx="0" ry="0" width="362" height="130"></rect>
      <rect x="16" y="465" rx="0" ry="0" width="170" height="37"></rect>
    </content-loader>
    <template v-else>
      <div class="card-img">
        <img :src="isImgUrlValid ? product.imgUrl : '/img/default-img.jpg'" alt="Продукт" />
      </div>
      <div class="card-text">
        <div class="card-title">{{ product.name }}</div>
        <div class="card-description">
          {{ product.description }}
        </div>
        <div class="card-price">{{ product.price }} руб.</div>
      </div>
      <div class="card-delete" @click="removeProductHandler(product.id)"></div>
    </template>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: {
    ContentLoader
  },
  props: {
    product: Object
  },
  data() {
    return {
      isLoading: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  },
  computed: {
    isImgUrlValid() {
      return /^https?:\/\/.*\.(?:jpe?g|gif|png)$/gi.test(this.product.imgUrl);
    }
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
  transition: box-shadow 0.25s ease;
  @media screen and (max-width: $max-width-laptop) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (max-width: $max-width-tablet) {
    width: 100%;
  }
  @media screen and (max-width: $max-width-mobile) {
    margin-right: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 20px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 3%) 0px 12px 13px,
      rgb(0 0 0 / 9%) 0px -3px 5px;
    .card-delete {
      transform: scale(1);
    }
  }
  .card-img {
    text-align: center;
    margin-bottom: 16px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    transform: scale(0);
    transition: transform 0.25s ease;
  }
}
</style>
