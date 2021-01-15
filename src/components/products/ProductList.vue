<template>
  <div>
    <div class="products">
      <div class="container">
          This is ProductList
      </div>
      <!-- <template v-for='product in products'> -->
        <product-item :products='products'></product-item>
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) { // 通过 this.$store.dispatch 的方式触发类型为 allProducts 的 action 中，在 action 中进行异步操作，
      this.$store.dispatch('allProducts') // 发起网络请求向后端请求商品数据并返回；如果是 false 则证明本地中存在商品，所以可以直接从本地获取然后进行渲染。
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts
    }
  },
  components: {
    'product-item': ProductItem
  }
}
</script>
