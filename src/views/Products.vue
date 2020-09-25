<template>
  <div class="products">
    <div class="container">
      <h1 class="products__title">Каталог товаров</h1>
      <router-link
        to='/'
        class="products__link"
      >
        <b-icon
          icon="house-fill"
          variant="info"
        />Вернуться на главную
      </router-link>
      <b-row>
        <b-col
          cols=12
          lg=3
        >
          <ProductsFilter />
        </b-col>
        <b-col
          cols=12
          lg=9
        >
          <div class="products__wrapper">
            <ProductsItem
              v-for="product in PRODUCTS"
              :key="product.id"
              :id="product.id"
              :imageUrl="product.imageUrl"
              :title="product.title"
              :subtype="product.subtype"
              :price="product.price"
              :article="product.article"
              :description="product.description"
            />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ProductsItem from "@/components/Products/ProductsItem";
import ProductsFilter from "@/components/Products/ProductsFilter";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Products",
  components: {
    ProductsItem,
    ProductsFilter,
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "SEARCH_PRODUCTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    if (this.$route.params.productType === "search") {
      this.SEARCH_PRODUCTS_FROM_API();
    } else {
      this.GET_PRODUCTS_FROM_API(this.$route.params.productType);
    }
  },
};
</script>

<style lang="scss">
  .products {
    margin-top: 30px;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }

    &__link {
      display: block;
      color: black;
      text-decoration: none;
      text-align: right;

      &:hover {
        color: black;
      }
    }
  }

  @media (max-width: 992px) {
    .products {
      &__link {
        margin-bottom: 20px;
      }
    }
  }
</style>