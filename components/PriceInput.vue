<template>
  <div :class="['input-row', 'input-required', { 'input-error': !isInputValueValid }]">
    <label class="title" for="">
      <span>
        <slot></slot>
      </span>
    </label>
    <input type="text" :value="inputValue" @input="updateInputValue" :placeholder="placeholderText" />
    <div class="error-text">Поле является обязательным</div>
  </div>
</template>

<script>
export default {
  props: {
    inputValue: String,
    placeholderText: String
  },
  data() {
    return {
      isInputValueValid: true
    };
  },
  methods: {
    updateInputValue() {
      let formattedValue = this.changePriceFormat();

      // Если мы изменили вид цены, а не обработали крайний случай, то ставим новое значение
      if (formattedValue) {
        this.setIsInputValueValid(formattedValue);
        this.$emit("update:inputValue", formattedValue);
      }
    },
    setIsInputValueValid(inputValue) {
      this.isInputValueValid = inputValue?.length === 0 ? false : true;
    },
    changePriceFormat() {
      let value = event.target.value;

      // Удаляем пробелы
      let clearValue = value.replace(/\s+/g, "");
      // Проверяем только ли цифры в цене (нет ли букв или пробелов)
      const isOnlyNumbers = /^\d+$/.test(clearValue);

      // Если введена цифра, то не меняем значение event
      if (!isOnlyNumbers && value?.length !== 0) {
        event.target.value = this.inputValue;
        return;
      }

      // Если пустая строка, то меняем значение event
      if (value?.length === 0) {
        event.target.value = "";
        this.setIsInputValueValid(event.target.value);
        this.$emit("update:inputValue", "");
        return;
      }

      value = new Intl.NumberFormat("ru").format(parseInt(clearValue));
      return value;
    }
  }
};
</script>
