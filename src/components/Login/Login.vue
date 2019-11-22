<template>
  <div class="login-container">
    <!-- <el-alert title="登录错误" type="error" v-if="isTrue" @close="hello" class="alert"></el-alert> -->
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="img-box">
        <img src="@/assets/logo.png" alt />
      </div>
      <!-- 登录 -->
      <el-form class="login_form" :model="formData" :rules="rules" ref="loginForm">
        <el-form-item prop="userName">
          <el-input prefix-icon="el-icon-user-solid" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input prefix-icon="el-icon-s-tools" v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn-save">
          <el-button type="primary" @click="loginSubmit">登录</el-button>
          <el-button type="info" @click="getResert">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      isTrue: false,
      rules: {
        userName: [
          { required: false, message: '请输入登录名称', trigger: 'blur' }
        ],
        passWord: [
          { required: false, message: '请输入正确的密码', trigger: 'blur' },
          { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginSubmit() {
      console.log(this.formData)
      this.$axios
        .post('user/login', {
          account: this.formData.username,
          password: this.formData.password
        })
        .then(response => {
          this.$message({
            message: '恭喜你,登录成功',
            type: 'success',
            duration: 2000
          })
          if (response.status == 200) {
            const { data: res } = response
            // 解构赋值不错
            console.log(res)
            // 跳转一定要放到token之后否则跳过之后还没有token值就尴尬了
            window.sessionStorage.setItem('token',res.data.token)
            this.$router.push('/home')   
          }
        })
        .catch(error => {
          console.log(error)
          this.$message.error('用户名或密码错误！')
        })
    },
    getResert() {
      this.$refs.loginForm.resetFields()
      this.formData.username = ''
      this.formData.password = ''
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px;
  position: relative;
  // position: absolute;
  // left:50%;
  // top: 50%;
  // transform: translate(-50%,-50%)
  //   display: flex;
  //   justify-content: center;
  .img-box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0 0 10px #333333;
    background-color: #fff;
    padding: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #808080;
    }
  }
}
.btn-save {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
// .alert{
//   position: absolute;
//   top:10%;
// }
</style>