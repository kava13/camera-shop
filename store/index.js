export const state = () => ({
  productsById: {
    1: {
      id: 1,
      imgUrl: "https://i.ibb.co/Rz4Dxd8/card-img.png",
      name: "АНаименование товара номер 1",
      description: "Описание товара номер 1. Оно самое короткое",
      price: 10000,
    },
    2: {
      id: 2,
      imgUrl: "https://i.ibb.co/Rz4Dxd8/card-img.png",
      name: "ДНаименование товара номер 2",
      description: "Описание товара номер 2. Довольно-таки интересное описание товара в несколько строк",
      price: 11000,
    },
    3: {
      id: 3,
      imgUrl: "https://i.ibb.co/Rz4Dxd8/card-img.png",
      name: "ВНаименование товара номер 3. Супер товар",
      description:
        "Описание товара номер 3. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 12000,
    },
    4: {
      id: 4,
      imgUrl: "https://i.ibb.co/Rz4Dxd8/card-img.png",
      name: "ГНаименование товара номер 4. Этот товар просто разрывная бомба пушка",
      description:
        "Описание товара номер 4. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 12500,
    },
  },
  allProductsId: [1, 2, 3, 4],
  sortingBy: "default",
});

export const mutations = {
  addProduct(state, newProduct) {
    state.productsById[newProduct.id] = newProduct;
    state.allProductsId.push(newProduct.id);
  },
  removeProduct(state, productId) {
    // Деструктурируем объект, удаляя ненужное нам свойство
    // Теперь оно хранится в переменной deletedProductId и больше не используется
    const { [productId]: deletedProductId, ...newProductsById } = state.productsById;
    state.productsById = newProductsById;
    // Также удаляем айди удаленного товара из массива
    state.allProductsId = state.allProductsId.filter((elem) => elem !== productId);
  },
  setSortingBy(state, sortingByValue) {
    state.sortingBy = sortingByValue;
  },
};
