<template>
  <div :class="['input-row', 'input-required', { 'input-error': !isInputValueValid }]">
    <label class="title" :for="inputId">
      <span>
        <slot></slot>
      </span>
    </label>
    <input type="text" @input="updateInputValue" :value="inputValue" :placeholder="placeholderText" :id="inputId" />
    <div class="error-text">Поле является обязательным</div>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: String,
    placeholderText: String,
    inputId: String,
    required: {
      type: Boolean,
      default: false
    },
    isPriceInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isInputValueValid: true
    };
  },
  methods: {
    updateInputValue() {
      let value = event.target.value;

      // Если это инпут с ценой, то форматируем введенное значение
      if (this.isPriceInput) {
        value = this.changePriceFormat(event, value);
      }

      // Если это обязательный для заполнения инпут, то проверяем валидность
      if (this.required) {
        this.setIsInputValueValid(value);
      }

      this.$emit("update:inputValue", value);
    },
    setIsInputValueValid(inputValue) {
      this.isInputValueValid = inputValue.length === 0 ? false : true;
    },
    changePriceFormat(ev, value) {
      if (value?.length !== 0) {
        // Удаляем пробелы
        let clearValue = value.replace(/\s+/g, "");
        // Проверяем только ли цифры в цене (нет ли букв или пробелов)
        const isOnlyNumbers = /^\d+$/.test(clearValue);

        // Если введена буква и инпут непустой, то не меняем значение event
        if (!isOnlyNumbers && value?.length !== 0) {
          ev.target.value = this.inputValue;
          return this.inputValue;
        }

        value = new Intl.NumberFormat("ru").format(parseInt(clearValue));
      }

      return value;
    }
  }
};
</script>
