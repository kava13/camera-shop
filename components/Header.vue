<template>
  <header>
    <div class="container">
      <div class="header-wr">
        <div class="header-title">
          Добавление товара
        </div>
        <div class="header-filter">
          <select name="" id="" @change="changeSortingFilter">
            <option value="default">По умолчанию</option>
            <option value="name-desc">По алфавиту (по убыванию)</option>
            <option value="name-asc">По алфавиту (по возрастанию)</option>
            <option value="name-desc">По цене (по убыванию)</option>
            <option value="name-asc">По цене (по возрастанию)</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeSortingFilter() {
      this.$emit("update:sortingBy", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 16px;
  .header-wr {
    display: flex;
    justify-content: space-between;
    .header-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
    }
    .header-filter {
      select {
        border: none;
        color: $grey;
        font-size: 14px;
        line-height: 16px;
        padding: 11px 28px 11px 16px;
        background: $primary;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
    }
  }
}
</style>
