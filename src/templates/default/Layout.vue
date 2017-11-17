<template>
  <div id="app">
    <v-head></v-head>
    <el-container>
      <v-sidebar></v-sidebar>
      <v-home>Main</v-home>
    </el-container>
  </div>
</template>

<script>
import vHead from './common/Header.vue';
import vSidebar from './common/Sidebar.vue';
import vHome from './common/Home.vue';

export default {
  components:{
    vHead, vSidebar,vHome
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
