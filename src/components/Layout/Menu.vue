<template>
  <fragment>
    <template v-for="(item, index) in List">
       <el-submenu :index="item.path" :key="index" v-if="item.children">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template> 
        <menuItem :List="item.children"></menuItem>
      </el-submenu>
      <el-menu-item :index="item.path" :key="index" v-else>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'menuItem',
  props: {
    List: {
      type: Array
    }
  },
  created() {
    console.log(this.List)
  }
}
</script>
<style lang="less" scoped>
</style>