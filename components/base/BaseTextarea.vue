<template>
  <div class="input-row">
    <label class="title" :for="textareaId">
      <span>
        <slot></slot>
      </span>
    </label>
    <textarea :id="textareaId" :value="textareaValue" @input="updateTextareaValue" :placeholder="placeholderText"> </textarea>
  </div>
</template>

<script>
export default {
  props: {
    textareaValue: String,
    placeholderText: String,
    textareaId: String,
  },
  methods: {
    updateTextareaValue() {
      this.$emit("update:textareaValue", event.target.value);
    },
  },
};
</script>
