<template>
  <div>
    <product-detail :product='product'></product-detail>
  </div>
</template>

<script>
import ProductDetail from '@/components/products/ProductDetails.vue'
export default {
  created() {
    const { name } = this.product
    if (!name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id'] // this.$route.params['id']从当前处于激活状态的路由对象中获取，并传入对应的getter中，进而从本地中获取指定商品。
      })
    }
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params['id'])
    }
  },
  components: {
    'product-detail': ProductDetail
  }
}
</script>
