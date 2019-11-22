<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="home-header">
      <!-- 头部组件 -->
      <Header></Header>
    </el-header>
    <el-container>
      <!-- 左侧 -->
      <el-aside :width="isTrue ? '60px':'200px' ">
        <div class="menua" @click="getMenu">|||</div>
        <transition name="fade">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :collapse="isTrue"
            :collapse-transition="false"
            :router="true"
          >
            <!-- 递归菜单 -->
            <menuItem :List="Menulist"></menuItem>
          </el-menu>
        </transition>
      </el-aside>
      <!-- 中间区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Header, menuItem } from './Layout/index'
export default {
  components: {
    menuItem,
    Header
  },
  data() {
    return {
      isTrue: false,
      Menulist: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '项目管理',
          path: '/project',
          children: [
            { name: '项目添加', path: '/project/projectAdd' },
            { name: '项目列表', path: '/project/projectList' }
          ]
        },
        {
          name: '任务管理',
          path: '/task',
          children: [
            {
              name: '添加任务',
              path: '/task/taskAdd',
              children: [{ name: '任务详情', path: '/task/taskadd/tasdDetail' }]
            },
            { name: '任务列表', path: '/task/taskList' }
          ]
        }
      ]
    }
  },
  methods: {
    getMenu() {
      this.isTrue = !this.isTrue
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #373d41;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
}
.el-aside {
  background-color: cadetblue;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: burlywood;
}
.el-container {
  height: 100vh;
}
.menua {
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
  background-color: darkgray;
}
</style>