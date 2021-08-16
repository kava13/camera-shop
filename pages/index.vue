<template>
  <div>
    <Header :sortingBy.sync="sortingBy"></Header>
    <div class="page-content">
      <section class="products">
        <div class="container">
          <div class="products-content">
            <FormBlock @add-product="addProduct"></FormBlock>
            <CardList :productsList="sortedProductsList" @remove-product="removeProduct"></CardList>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "/components/Header";
import FormBlock from "/components/FormBlock";
import CardList from "/components/CardList";

export default {
  components: {
    Header,
    FormBlock,
    CardList
  },
  data() {
    return {
      productsById: {
        1: {
          id: 1,
          imgUrl: "/img/card-img.png",
          name: "АНаименование товара номер 1",
          description: "Описание товара номер 1. Оно самое короткое",
          price: 10000
        },
        2: {
          id: 2,
          imgUrl: "/img/card-img.png",
          name: "ДНаименование товара номер 2",
          description: "Описание товара номер 2. Довольно-таки интересное описание товара в несколько строк",
          price: 11000
        },
        3: {
          id: 3,
          imgUrl: "/img/card-img.png",
          name: "ВНаименование товара номер 3. Супер товар",
          description:
            "Описание товара номер 3. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 12000
        },
        4: {
          id: 4,
          imgUrl: "/img/card-img.png",
          name: "ГНаименование товара номер 4. Этот товар просто разрывная бомба пушка",
          description:
            "Описание товара номер 4. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          price: 12500
        }
      },
      allProductsId: [1, 2, 3, 4],
      sortingBy: "default"
    };
  },
  computed: {
    sortedProductsList() {
      let productsList = this.allProductsId.map(productId => this.productsById[productId]);
      return this.sortProductsList(productsList);
    }
  },
  methods: {
    removeProduct(productId) {
      // Деструктурируем объект, удаляя ненужное нам свойство
      // Теперь оно хранится в переменной deletedProductId и больше не используется
      const { [productId]: deletedProductId, ...newProductsById } = this.productsById;
      this.productsById = newProductsById;
      // Также удаляем айди удаленного товара из массива
      this.allProductsId = this.allProductsId.filter(elem => elem !== productId);
    },
    addProduct(newProduct) {
      this.productsById[newProduct.id] = newProduct;
      this.allProductsId.push(newProduct.id);
    },
    sortProductsList(productsList) {
      return productsList.sort((item, nextItem) => {
        if (this.sortingBy === "default") {
          return;
        }

        if (this.sortingBy === "name") {
          if (item.name.toLowerCase() > nextItem.name.toLowerCase()) return 1;
          if (item.name.toLowerCase() < nextItem.name.toLowerCase()) return -1;

          return 0;
        }

        if (this.sortingBy === "price-desc") {
          if (item.price > nextItem.price) return -1;
          if (item.price < nextItem.price) return 1;

          return 0;
        }

        if (this.sortingBy === "price-asc") {
          if (item.price < nextItem.price) return -1;
          if (item.price > nextItem.price) return 1;

          return 0;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.products-content {
  display: flex;
  // margin-right: -16px;
  @media screen and (max-width: $max-width-mobile) {
    flex-direction: column;
  }
}
</style>
