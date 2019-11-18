<template>
  <el-container>
    <!-- 头部 -->
    <el-header>Header</el-header>
    <el-container>
      <!-- 左侧 -->
      <el-aside :width="isTrue ? '60px':'200px' ">
        <div class="menua" @click="getMenu">|||</div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :collapse="isTrue"
          :collapse-transition="false"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="(item, index) in Menulist" :key="index">
            <template slot="title">
              <i :class="firstIcon[item.id]"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="i.id +''" v-for="(i, index) in item.children" :key="index">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{i.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isTrue: false,
      Menulist: [
        {
          id: 1,
          name: "用户管理",
          children: [
            { id: 1.1, name: "aaaaaa" },
            { id: 1.2, name: "bbbbb" },
            { id: 1.3, name: "ccccc" },
            { id: 1.4, name: "wafcawd" }
          ]
        },
        {
          id: 2,
          name: "权限管理",
          children: [
            { id: 2.1, name: "aaaaaa" },
            { id: 2.2, name: "bbbbb" },
            { id: 2.3, name: "ccccc" },
            { id: 2.4, name: "wafcawd" }
          ]
        },
        {
          id: 3,
          name: "商品管理",
          children: [
            { id: 3.1, name: "aaaaaa" },
            { id: 3.2, name: "bbbbb" },
            { id: 3.3, name: "ccccc" },
            { id: 3.4, name: "wafcawd" }
          ]
        },
        {
          id: 4,
          name: "订单管理",
          children: [
            { id: 4.1, name: "aaaaaa" },
            { id: 4.2, name: "bbbbb" },
            { id: 4.3, name: "ccccc" },
            { id: 4.4, name: "wafcawd" }
          ]
        },
        {
          id: 5,
          name: "数据统计",
          children: [
            { id: 5.1, name: "aaaaaa" },
            { id: 5.2, name: "bbbbb" },
            { id: 5.3, name: "ccccc" },
            { id: 5.4, name: "wafcawd" }
          ]
        }
      ],
      firstIcon: {
        1: "el-icon-s-opportunity",
        2: "el-icon-s-custom",
        3: "el-icon-s-home",
        4: "el-icon-s-home",
        5: "el-icon-s-cooperation"
      }
    };
  },
  methods: {
    getMenu() {
      this.isTrue = !this.isTrue;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: aliceblue;
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
  background-color:darkgray;
}
</style>