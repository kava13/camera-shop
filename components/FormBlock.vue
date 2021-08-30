<template>
  <div class="form-wr">
    <form action="addProduct" method="post">
      <BaseInput required :inputValue.sync="name" :placeholderText="'Введите наименование товара'" :inputId="'name'">
        Наименование товара
      </BaseInput>
      <BaseTextarea :textareaValue.sync="description" :placeholderText="'Введите описание товара'" :textareaId="'description'">
        Описание товара
      </BaseTextarea>
      <BaseInput required :inputValue.sync="imgUrl" :placeholderText="'Введите ссылку'" :inputId="'imgUrl'">
        Ссылка на изображение
      </BaseInput>
      <BaseInput :isPriceInput="true" required :inputValue.sync="formattedPrice" :placeholderText="'Введите цену'" :inputId="'price'">
        Цена товара
      </BaseInput>
      <button class="add-product-btn" :disabled="!isFormValid" @click.prevent="addProduct">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

import BaseInput from "/components/base/BaseInput";
import BaseTextarea from "/components/base/BaseTextarea";

export default {
  components: {
    BaseInput,
    BaseTextarea
  },
  data() {
    return {
      name: "",
      description: "",
      imgUrl: "",
      formattedPrice: ""
    };
  },
  computed: {
    isFormValid() {
      return this.name?.length > 0 && this.imgUrl?.length > 0 && this.formattedPrice?.length > 0;
    },
    priceWithoutFormatting() {
      return parseInt(this.formattedPrice.replace(/\s+/g, ""));
    }
  },
  methods: {
    addProduct() {
      const newProduct = {
        id: nanoid(),
        imgUrl: this.imgUrl,
        name: this.name,
        description: this.description,
        priceWithoutFormatting: this.priceWithoutFormatting,
        formattedPrice: this.formattedPrice
      };
      this.$store.commit("addProduct", newProduct);
      this.clearInputValues();
    },
    clearInputValues() {
      this.name = "";
      this.description = "";
      this.imgUrl = "";
      this.formattedPrice = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.form-wr {
  width: 332px;
  flex-shrink: 0;
  margin-right: 16px;
  @media screen and (max-width: $max-width-mobile) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
  form {
    color: $darks;
    padding: 24px;
    background: $primary;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    .add-product-btn {
      font-family: "Inter", Arial, sans-serif;
      width: 100%;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: $grey;
      background-color: $grey-dark;
      padding: 10px;
      border: none;
      border-radius: 10px;
      margin-top: 24px;
      &:not(:disabled) {
        cursor: pointer;
        background-color: #7bae73;
        color: $primary;
      }
    }
  }
}
</style>
