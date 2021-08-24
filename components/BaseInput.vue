<template>
  <div :class="['input-row', 'input-required', { 'input-error': !isInputValueValid }]">
    <label class="title" for="">
      <span>
        <slot></slot>
      </span>
    </label>
    <input type="text" @input="updateInputValue" :value="inputValue" :placeholder="placeholderText" />
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
      this.setIsInputValueValid(event.target.value);
      this.$emit("update:inputValue", event.target.value);
    },
    setIsInputValueValid(inputValue) {
      this.isInputValueValid = inputValue.length === 0 ? false : true;
    }
  }
};
</script>
