import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_BASE = 'http://localhost:3000/api/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 表示，我们必须使用 Vuex 的 Mutation 函数来改变 state，否则就会报错
  state: { // state 参数用来存放我们全局的状态
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [
      {
        _id: '1',
        name: 'iPhone',
        description: 'iPhone是美国苹果公司研发的智能手机系列，搭载苹果公司研发的iOS操作系统',
        image: 'https://i.gadgets360cdn.com/large/iPhone11_leak_1567592422045.jpg',
        price: 2000,
        manufacturer: 'Apple Inc'
      },
      {
        _id: '2',
        name: '荣耀20',
        description: '李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠 全面屏手机',
        image: 'https://article-fd.zol-img.com.cn/t_s640x2000/g4/M08/0E/0E/ChMlzF2myueILMN_AAGSPzoz23wAAYJ3QADttsAAZJX090.jpg',
        price: 2499,
        manufacturer: '华为'
      },
      {
        _id: '3',
        name: 'MIX2S',
        description: '骁龙845 全面屏NFC 游戏智能拍照手机 白色 全网通 6+128',
        image: 'http://himg2.huanqiu.com/attachment2010/2018/0129/08/39/20180129083933823.jpg',
        price: 1688,
        manufacturer: '小米'
      },
      {
        _id: '4',
        name: 'IQOO Pro',
        description: '12GB+128GB 竞速黑 高通骁龙855Plus手机 4800万AI三摄 44W超快闪充 5G全网通手机',
        image: 'https://www.tabletowo.pl/wp-content/uploads/2019/08/vivo-iqoo-pro-5g-blue-1.jpg',
        price: 4098,
        manufacturer: 'Vivo'
      },
      {
        _id: '5',
        name: 'Reno2',
        description: '【12期免息1年碎屏险】4800万变焦四摄8+128G防抖6.5英寸全面屏新 深海夜光(8GB+128GB) 官方标配',
        image: 'https://news.maxabout.com/wp-content/uploads/2019/08/OPPO-Reno-2-1.jpg',
        price: 2999,
        manufacturer: 'OPPO'
      }

    ],
    // all manufacturers
    manufacturers: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product.id !== productId)
    },
    ALL_PRODUCTS(state) {
      state.showLoader = true
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {
      const { products } = payload
      state.showLoader = false
      state.products = products
    }
  },
  actions: {
    allProducts({ commit }) { // 这是采用了解构赋值的方式 const { commit } = context，避免后面使用 context.commit 过于繁琐。
      commit('ALL_PRODUCTS')

      axios.get(`${API_BASE}/products`).then(response => {
        console.log(`response`, response)
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data
        })
      })
    }
  }
})
// strict 表示我们告诉 Vue，只允许 Mutation 方法才能修改 state，确保修改状态的唯一性；
// state 是我们整个应用的状态，整个应用的状态都是从它获取，整个应用状态的改变都是修改它，
// 所以这个 state 也有 “数据的唯一真相来源” 的称谓。•然后我们通过在 main.js 里面导入实例化的 store，
// 将它加入到初始化 Vue 实例的参数列表中，实现了 Vuex 和 Vue 的整合。•最后我们讲解了计算属性，
// 然后通过在计算属性中获取 this.$store.state 的方式展示了 Vuex 整合之后的效果。
