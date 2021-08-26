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
            <option value="name">По алфавиту</option>
            <option value="price-desc">По цене (по убыванию)</option>
            <option value="price-asc">По цене (по возрастанию)</option>
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
      this.$store.commit("setSortingBy", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-top: 32px;
  margin-bottom: 16px;
  .header-wr {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: $max-width-mobile) {
      flex-direction: column;
    }
    .header-title {
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      @media screen and (max-width: $max-width-mobile) {
        margin-bottom: 15px;
      }
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
