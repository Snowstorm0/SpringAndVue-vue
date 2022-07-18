<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">

      <!-- 侧边文字 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
            <el-menu-item-group>
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/userView">全部用户</el-menu-item>
              <el-menu-item index="/userAdd">添加用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 头部文字 -->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>公众号：代码的路</span>
        </el-header>
        <br><br>
        <router-view></router-view>
      </el-container>

    </el-container>
  </div>
</template>


<style>
  /* 顶栏 */
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  /* 底栏 */
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  /* 侧栏 */
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  /* 主要区域 */
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>


<script>
  export default {
    data() {
      const item = {

      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>