<template>
  <fragment>
    <div>
      <img src="@/assets/1.jpg" alt srcset />
      <span>鲤鱼云系统</span>
    </div>
    <el-button type="info" @click="getOut">退出</el-button>
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
  methods: {
    getOut() {
      console.log(this)
      this.$confirm('此操作将退出当前用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          window.sessionStorage.clear()
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '退出取消'
          })
        })
    }
  },
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