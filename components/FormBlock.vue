<template>
  <div class="form-wr">
    <form action="" method="post">
      <div :class="['input-row', 'input-required', { 'input-error': submitStatus === 'ERROR' && $v.inputs.name.$error }]">
        <label class="title" for="">
          <span>
            Наименование товара
          </span>
        </label>
        <input type="text" v-model="$v.inputs.name.$model" @focus="$v.inputs.name.$reset" placeholder="Введите наименование товара" />
        <div class="error-text">Поле является обязательным</div>
      </div>
      <div class="input-row">
        <label class="title" for="">
          <span>
            Описание товара
          </span>
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="$v.inputs.description.$model"
          @focus="$v.inputs.description.$reset"
          placeholder="Введите описание товара"
        >
        </textarea>
      </div>
      <div :class="['input-row', 'input-required', { 'input-error': submitStatus === 'ERROR' && $v.inputs.imgUrl.$error }]">
        <label class="title" for="">
          <span>
            Ссылка на изображение товара
          </span>
        </label>
        <input type="text" v-model="$v.inputs.imgUrl.$model" @focus="$v.inputs.imgUrl.$reset" placeholder="Введите ссылку" />
        <div class="error-text">Поле является обязательным</div>
      </div>
      <div :class="['input-row', 'input-required', { 'input-error': submitStatus === 'ERROR' && $v.inputs.formattedPrice.$error }]">
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
      </div>
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

export default {
  mixins: [validationMixin],
  data() {
    return {
      priceWithoutFormatting: null,
      inputs: {
        name: "",
        description: "",
        imgUrl: "",
        formattedPrice: ""
      },
      submitStatus: null
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
      return this.inputs.name.length > 0 && this.inputs.imgUrl.length > 0 && this.inputs.formattedPrice.length > 0;
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
    },
    formatPrice() {
      let value = event.target.value;
      // Удаляем пробелы
      let clearValue = value.replace(/\s+/g, "");

      const isOnlyNumbers = /^\d+$/.test(clearValue);
      console.log("isOnlyNumbers ? ", isOnlyNumbers);
      if (!isOnlyNumbers && value.length !== 0) {
        event.target.value = this.inputs.formattedPrice;
        return;
      }

      if (value.length === 0) {
        console.log("value length === 0");
        event.target.value = "";
        this.priceWithoutFormatting = "";
        this.inputs.formattedPrice = null;
        return;
      }

      console.log("value before formatting", clearValue);
      value = new Intl.NumberFormat("ru").format(parseInt(clearValue));
      console.log("value after formatting", value);

      console.log("🚀 ~ value type", typeof value);
      console.log("🚀 ~ clearValue", typeof parseInt(clearValue));

      this.priceWithoutFormatting = parseInt(clearValue);
      this.inputs.formattedPrice = value;
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
    input,
    textarea {
      width: 100%;
      font-size: 12px;
      line-height: 15px;
      padding: 10px 16px;
      background: $primary;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid transparent;
      border-radius: 4px;
      &::placeholder {
        color: $grey;
      }
      &:focus {
        border: 1px solid $grey;
      }
    }
    .input-row {
      position: relative;
      &:not(:last-child) {
        margin-bottom: 22px;
      }
      &.input-required {
        .title {
          span {
            position: relative;
            &::after {
              content: "";
              position: absolute;
              display: block;
              width: 4px;
              height: 4px;
              background-color: $red;
              border-radius: 50%;
              top: 4px;
              right: -4px;
            }
          }
        }
      }
      &.input-error {
        input {
          border: 1px solid $red;
        }
        .error-text {
          display: block;
        }
      }
      .title {
        display: block;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;
      }
      .error-text {
        display: none;
        position: absolute;
        color: $red;
        font-size: 10px;
        line-height: 12px;
        bottom: -16px;
      }
    }
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
