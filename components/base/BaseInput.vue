<template>
  <div :class="['input-row', 'input-required', { 'input-error': !isInputValueValid }]">
    <label class="title" :for="inputId">
      <span>
        <slot></slot>
      </span>
    </label>
    <input :id="inputId" type="text" :value="inputValue" :placeholder="placeholderText" @input="updateInputValue" />
    <div class="error-text">Поле является обязательным</div>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    placeholderText: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    isPriceInput: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isInputValueValid: true,
    };
  },
  methods: {
    updateInputValue() {
      let { value } = event.target;

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
      this.isInputValueValid = inputValue.length !== 0;
    },
    changePriceFormat(event, value) {
      let finalValue = value;
      const ev = event;

      if (finalValue?.length !== 0) {
        // Удаляем пробелы
        const clearValue = value.replace(/\s+/g, "");
        // Проверяем только ли цифры в цене (нет ли букв или пробелов)
        const isOnlyNumbers = /^\d+$/.test(clearValue);

        // Если введена буква и инпут непустой, то не меняем значение event
        if (!isOnlyNumbers && finalValue?.length !== 0) {
          ev.target.value = this.inputValue;
          return this.inputValue;
        }

        finalValue = new Intl.NumberFormat("ru").format(parseInt(clearValue, 10));
      }

      return finalValue;
    },
  },
};
</script>
