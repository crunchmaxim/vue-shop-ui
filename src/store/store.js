import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    filteredProducts: [],
    cart: [],
    subtypes: [],
    currentSubtype: '',
  },
  mutations: {
    SET_PRODUCT: (state, products) => {
      state.products = products
      state.filteredProducts = products
    },
    FILTER_PRODUCTS_BY_SUBTYPE: (state, subtype) => {
      if (subtype === 'Все') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(product => product.subtype === subtype)
      }
      state.currentSubtype = subtype;
    },
    SET_SUBTYPES: (state) => {
      const subtypesArr = [];
      state.filteredProducts.forEach((product) => {
        if (!subtypesArr.includes(product.subtype)) {
          subtypesArr.push(product.subtype)
        }
      })
      state.subtypes = subtypesArr
    },
    FILTER_PRODUCTS_BY_PRICE: (state, payload) => {
      if (state.currentSubtype === '') {
        state.filteredProducts = state.products.filter(product => (product.price >= +payload.minPrice && product.price <= +payload.maxPrice))
      } else {
        state.filteredProducts = state.products.filter(product => (product.price >= +payload.minPrice && product.price <= +payload.maxPrice && product.subtype === state.currentSubtype))
      }
    },
    ADD_PRODUCT_TO_CART: (state, productId) => {
      const productToCart = state.products.filter(product => product.id === productId)[0]
      state.cart.push(productToCart)
    },
    CHANGE_CART_PRODUCT_QUANTITY: (state, payload) => {
      let productIndex;
        
      state.cart.filter((product,index) => {
        if (product.id === payload.id) productIndex = index
      })

      if (payload.type === "decrease") {
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity--
        }
      }
      
      if (payload.type === "increase") {
        state.cart[productIndex].quantity++
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API: async ({ commit }, productType) => {
      const response = await axios.get(`https://europe-west3-vue-shop-21bef.cloudfunctions.net/api/products/${productType}`)
      await commit('SET_PRODUCT', response.data)
      await commit('SET_SUBTYPES')
    },
    GET_PRODUCTS_BY_PRICE: ({commit}, payload) => {
      commit('FILTER_PRODUCTS_BY_PRICE', payload)
    }
  },
  getters: {
    PRODUCTS: (state) => {
      return state.filteredProducts
    },
    SUBTYPES: (state) => {
      return state.subtypes;
    },
    CART_PRODUCTS: (state) => {
      return state.cart
    }
  }
})
