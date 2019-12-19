<template>    
<el-container   style="height: 100vh; border: 1px solid #eee">
  <el-aside   width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu  router :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>系统管理</template>
        <el-menu-item-group title="系统">
          <el-menu-item index="/adminuser">管理员管理</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
     
       <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>运营管理</template>
        <el-menu-item-group title="运营">
          <el-menu-item index="/supplier">供货商列表</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="/goods">商品入库</el-menu-item>
      </el-submenu>
    


    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>黎明xxw</span>
    </el-header>
    
    <el-main>
       <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
 html,body{
     margin: 0px;
     padding: 0px;
 }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>