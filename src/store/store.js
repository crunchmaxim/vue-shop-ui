import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    filteredProducts: [],
    cart: [],
    subtypes: []
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
      state.filteredProducts = state.filteredProducts.filter(product => (product.price >= +payload.minPrice && product.price <= +payload.maxPrice))
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
      commit('SET_SUBTYPES')
    }
  },
  getters: {
    PRODUCTS: (state) => {
      return state.filteredProducts
    },
    SUBTYPES: (state) => {
      return state.subtypes;
    }
  }
})
