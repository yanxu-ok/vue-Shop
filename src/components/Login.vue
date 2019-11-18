<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="img-box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录 -->
      <el-form class="login_form" v-model="formData">
        <el-form-item>
          <el-input prefix-icon="el-icon-user-solid" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-s-tools" v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn-save">
          <el-button type="primary" @click="loginSubmit">登录</el-button>
          <el-button type="info">重置</el-button>
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
        username: "",
        password: ""
      }
    };
  },
  created() {
  },
  methods: {
    loginSubmit() {
      console.log(this.formData)
      this.$axios
        .post("user/login", {
          account: this.formData.username,
          password: this.formData.password
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
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
</style>