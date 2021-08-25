<template>
  <div class="input-row">
    <label class="title" for="">
      <span>
        <slot></slot>
      </span>
    </label>
    <textarea name="" id="" cols="30" rows="10" :value="textareaValue" @input="updateTextareaValue" :placeholder="placeholderText">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    textareaValue: String,
    placeholderText: String
  },
  methods: {
    updateTextareaValue() {
      this.$emit("update:textareaValue", event.target.value);
    }
  }
};
</script>
