<template>
    <div>
        <div class="products">
            <div class="container">
                This is ProductList
            </div>
            <template v-for='product in products'>
                <div :key='product._id' class="product">
                    <p class="product__name">产品名称：{{product.name}}</p>
                    <p class="product__description">介绍：{{product.description}}</p>
                    <p class="product__price">价格：{{product.price}}</p>
                    <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
                    <img :src='product.image' alt='' class="product__image">
                    <button @click="addToCart(product)">加入购物车</button>
                </div>
            </template>
        </div>
    </div>
</template>

<style>
    .product {
        border-bottom: 1px solid black;
    }

    .product__image {
        width: 100px;
        height: 100px
    }
</style>

<script>
export default {
  name: 'product-list',
  created() {
    if (this.products.length === 0) { // 通过 this.$store.dispatch 的方式触发类型为 allProducts 的 action 中，在 action 中进行异步操作，
      this.$store.dispatch('allProducts') // 发起网络请求向后端请求商品数据并返回；如果是 false 则证明本地中存在商品，所以可以直接从本地获取然后进行渲染。
    } 
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', {
        product
      })
    }
  }
}
</script>
