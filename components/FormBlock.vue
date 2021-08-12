<template>
  <div class="form-wr">
    Form Block
    <form action="" method="post">
      <div class="input-row">
        <label class="title" for="">Наименование товара</label>
        <input
          type="text"
          v-model="$v.inputs.name.$model"
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="input-row">
        <label class="title" for="">Описание товара</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="$v.inputs.description.$model"
          placeholder="Введите описание товара"
        >
        </textarea>
      </div>
      <div class="input-row">
        <label class="title" for="">
          Ссылка на изображение товара
        </label>
        <input
          type="text"
          v-model="$v.inputs.imgUrl.$model"
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="input-row">
        <label class="title" for="">Цена товара</label>
        <input
          type="text"
          v-model="$v.inputs.price.$model"
          placeholder="Введите цену"
        />
      </div>
      <button class="add-product-btn" @click.prevent="addProduct">
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      inputs: {
        name: "",
        description: "",
        imgUrl: "",
        price: ""
      }
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
      price: {
        required
        // minLength: minLength(17)
      }
      // mail: {}
    }
  },
  methods: {
    addProduct() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("Ошибка");
      } else {
        console.log("Добавили товар");
      }
      console.log("add product ");
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
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    input,
    textarea {
      width: 100%;
      font-size: 12px;
      line-height: 15px;
      padding: 10px 16px;
      background: $primary;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      &::placeholder {
        color: $grey;
      }
    }
    .input-row {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      .title {
        display: block;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: -0.02em;
        margin-bottom: 4px;
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
    }
  }
}
</style>
