<template>
    <div>
        <el-button v-if="isAdding" type="text" @click='addToCart' size='small'>加入购物车</el-button>
        <el-button v-else type='text' @click='removeFromCart(id)' size='small'>从购物车移除</el-button>
    </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product() {
      let product = this.$store.getters.allProducts.find(product => product._id === this.id)
      return product
    },
    isAdding() {
      let isAdding = true
      this.cart.map(product => { // 通过 cart 数组的 map 方法遍历数组，判断当前商品是否在购物车中
        if (product._id === this.product._id) {
          isAdding = false
        }
      })
      return isAdding
    },
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', {
        product: this.product
      })
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', {
        productId
      })
    }
  }
}
</script>
