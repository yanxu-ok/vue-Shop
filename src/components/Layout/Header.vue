<template>
  <fragment>
    <div>
      <img src="@/assets/1.jpg" alt srcset />
      <span>电商管理系统</span>
    </div>
    <el-button type="info">退出</el-button>
  </fragment>
</template>
<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  created() {}
}
</script>
<style lang='scss' scoped>
div {
  display: flex;
  align-items: center;
  span {
    margin-left: 15px;
  }
}
img {
  width: 100px;
  height: 100%;
}
</style>