<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link :to="{ name: 'win_server'}">windows服务器配置信息</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'linux_server'}">linux服务器配置信息</router-link>
      </el-menu-item>
      <!--<el-submenu index="2">-->
      <!--<template slot="title">我的工作台</template>-->
      <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
      <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
      <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
      <!--<el-submenu index="2-4">-->
      <!--<template slot="title">选项4</template>-->
      <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
      <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
      <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
      <!--</el-submenu>-->
      <!--</el-submenu>-->
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">管理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {activeIndex: '1'}
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key)
      console.log(keyPath)
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    display: block;
    height: 100%;
  }

  .el-menu-demo > .el-menu-item:hover {
    color: rgb(255, 208, 75) !important;
    border-bottom-color: rgb(255, 208, 75) !important;
    background-color: rgb(84, 92, 100) !important;
    border-bottom-width: 3px;
    transition: all .7s;
  }
</style>
