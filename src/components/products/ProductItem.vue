<template>
    <div class="products">
      <el-table class='table' :data='products' max-height='250'>
        <el-table-column prop='name' label='产品名称' width="180"></el-table-column>
        <el-table-column prop='description' label='介绍' width="180"></el-table-column>
        <el-table-column prop='price' label='价格' width="180"></el-table-column>
        <el-table-column prop='manufacturer.name' label='生产厂商' width="180"></el-table-column>
        <el-table-column label='操作' width="180"><template slot-scope="scope"><product-button :id='scope.row._id'></product-button></template></el-table-column>
      </el-table>
      <!-- 最后一个 el-table-column 标签中并没有定义 prop 属性，这是因为最后一列单元格中放置的是按钮而不是商品信息，
      该按钮是用于对指定行对象进行指定操作，这里我们使用 scope.row 获取指定行对象并将其 id 传递给了 ProductButton 按钮组件。
      通过 slot-scope 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
    </div>
</template>

<script>
import ProductButton from './ProductButton.vue'
export default {
  name: 'product-item',
  props: ['products'],
  components: {
    'product-button': ProductButton
  }
}
</script>
