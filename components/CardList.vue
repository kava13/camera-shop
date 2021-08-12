<template>
  <div class="cards-list">
    <template v-for="(item, index) in productsList">
      <Card :product="item" @remove-product="removeProduct" :key="item.id"></Card>
    </template>
  </div>
</template>

<script>
import Card from "/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      productsById: {
        1: {
          id: 1,
          imgUrl: "/img/card-img.png",
          name: "Наименование товара номер 1",
          description: "Описание товара номер 1. Оно самое короткое",
          price: "10 000"
        },
        2: {
          id: 2,
          imgUrl: "/img/card-img.png",
          name: "Наименование товара номер 2",
          description: "Описание товара номер 2. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000"
        },
        3: {
          id: 3,
          imgUrl: "/img/card-img.png",
          name: "Наименование товара номер 3. Супер товар",
          description:
            "Описание товара номер 3. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000"
        },
        4: {
          id: 4,
          imgUrl: "/img/card-img.png",
          name: "Наименование товара номер 4. Этот товар просто разрывная бомба пушка",
          description:
            "Описание товара номер 4. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: "10 000"
        }
      },
      allProductsId: [1, 2, 3, 4]
    };
  },
  computed: {
    productsList() {
      return this.allProductsId.map(productId => {
        return this.productsById[productId];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 332px - 16px + 16px);
  margin-right: -16px;
}
</style>
