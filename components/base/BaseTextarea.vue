<template>
  <div class="input-row">
    <label class="title" :for="textareaId">
      <span>
        <slot></slot>
      </span>
    </label>
    <textarea :id="textareaId" :value="textareaValue" :placeholder="placeholderText" @input="updateTextareaValue"> </textarea>
  </div>
</template>

<script>
export default {
  props: {
    textareaValue: {
      type: String,
      required: true,
    },
    placeholderText: {
      type: String,
      required: true,
    },
    textareaId: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateTextareaValue() {
      this.$emit("update:textareaValue", event.target.value);
    },
  },
};
</script>
