/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  products: [],
  sortingBy: "default",
});

export const mutations = {
  addProduct(state, newProduct) {
    state.products.push(newProduct);
  },
  removeProduct(state, productId) {
    state.products = state.products.filter((product) => product.id !== productId);
  },
  setSortingBy(state, sortingByValue) {
    state.sortingBy = sortingByValue;
  },
};
