<template>
  <div class="form-wr">
    <form action="" method="post">
      <BaseInput :inputValue.sync="inputs.name" :placeholderText="'Введите наименование товара'">
        Наименование товара
      </BaseInput>
      <BaseTextarea :textareaValue.sync="inputs.description"></BaseTextarea>
      <BaseInput :inputValue.sync="inputs.imgUrl" :placeholderText="'Введите ссылку'">
        Ссылка на изображение
      </BaseInput>
      <PriceInput :inputValue.sync="inputs.formattedPrice" :placeholderText="'Введите цену'">
        Цена товара
      </PriceInput>
      <!-- <div :class="['input-row', 'input-required', { 'input-error': submitStatus === 'ERROR' && $v.inputs.formattedPrice.$error }]">
        <label class="title" for="">
          <span>
            Цена товара
          </span>
        </label>
        <input
          type="text"
          :value="$v.inputs.formattedPrice.$model"
          @input="formatPrice"
          @focus="$v.inputs.formattedPrice.$reset"
          placeholder="Введите цену"
        />
        <div class="error-text">Поле является обязательным</div>
      </div> -->
      <button class="add-product-btn" :disabled="!isFormValid" @click.prevent="addProduct">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { nanoid } from "nanoid";

import BaseInput from "./BaseInput";
import PriceInput from "./PriceInput";
import BaseTextarea from "./BaseTextarea";

export default {
  components: {
    BaseInput,
    PriceInput,
    BaseTextarea
  },
  mixins: [validationMixin],
  data() {
    return {
      inputs: {
        name: "",
        description: "",
        imgUrl: "",
        formattedPrice: ""
      },
      submitStatus: null,
      isShowErrors: false
    };
  },
  validations: {
    inputs: {
      name: {
        required
      },
      imgUrl: {
        required
      },
      description: {},
      formattedPrice: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return this.inputs.name?.length > 0 && this.inputs.imgUrl?.length > 0 && this.inputs.formattedPrice?.length > 0;
    },
    priceWithoutFormatting() {
      return parseInt(this.inputs.formattedPrice.replace(/\s+/g, ""));
    }
  },
  methods: {
    addProduct() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("Ошибка");
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        let newProduct = {
          id: nanoid(),
          imgUrl: this.inputs.imgUrl,
          name: this.inputs.name,
          description: this.inputs.description,
          price: this.inputs.formattedPrice
        };
        this.$emit("add-product", newProduct);
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 1000);
        this.resetInputValues();
      }
    },
    resetInputValues() {
      this.inputs.name = "";
      this.inputs.description = "";
      this.inputs.imgUrl = "";
      this.inputs.formattedPrice = "";
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
    margin-right: 0;
  }
  form {
    color: $darks;
    padding: 24px;
    background: $primary;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    .add-product-btn {
      width: 100%;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: $grey;
      background-color: $grey-dark;
      padding: 10px;
      border: none;
      border-radius: 10px;
      &:not(:disabled) {
        cursor: pointer;
        background-color: #7bae73;
        color: $primary;
      }
    }
  }
}
</style>
