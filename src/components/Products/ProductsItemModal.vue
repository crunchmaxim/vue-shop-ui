<template>
  <div class="products-item-modal">
    <b-modal
      v-model="modalShow"
      size="lg"
      ok-only
      ok-title="Закрыть"
      ok-variant="secondary"
      centered
    >
      <b-card
        no-body
        class="overflow-hidden"
        style="max-width: 100%; border: none"
      >
        <b-row no-gutters>
          <b-col md="12" lg="6">
            <b-card-img
              :src="imageUrl"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="12" lg="6">
            <b-card-body :title="title">
              <div class="products-item-modal__info">
                <span>Артикул:</span> {{article}}
              </div>
              <div class="products-item-modal__info">
                <span>Описание:</span> акустическая гитара, цвет натуральный, материал корпуса - липа, топ - ель, форма корпуса - дредноут, гриф - нато, накладка грифа - орех, количество ладов: 20, мензура 25.3", фурнитура хром, в комплекте чехол
              </div>
              <div class="products-item-modal__info">
                <span>Цена:</span> {{price}} р.
              </div>
              <b-button
                href="#"
                variant="info"
                @click="addToCart"
              >Добавить в корзину</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </div>

</template>

<script>
export default {
  name: "ProductsItemModal",
  props: [
    "article",
    "id",
    "imageUrl",
    "price",
    "quantity",
    "subtype",
    "title",
    "modal",
  ],
  computed: {
    modalShow: {
      get() {
        return this.modal;
      },
      set() {
        return this.$emit("toggleModal");
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
};
</script>

<style lang="scss">
  .products-item-modal {
    &__info {
      margin-bottom: 15px;
      span {
        font-weight: 500;
      }
    }
  }
</style>