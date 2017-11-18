<template>

<el-menu width="300px" default-active="2-1-1" class="el-menu-vertical-demo"   @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-submenu index="1-1">
      <span slot="title">分组1</span>
      <el-menu-item index="1-1-1">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="1-2">
      <span slot="title">分组2</span>
      <el-menu-item index="1-2-1">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="1-3">
      <span slot="title">分组3</span>
      <el-menu-item index="1-3-1">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="1-4">
      <span slot="title">分组4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-submenu index="2">
  	<template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
   </template>
    <el-submenu index="2-1">
      <span slot="title">分组1</span>
      <el-menu-item index="2-1-1">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="2-2">
      <span slot="title">分组2</span>
      <el-menu-item index="2-2-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-button  @click='slide' :rotate='isCollapse' type="primary" icon="el-icon-arrow-left"></el-button>

</el-menu>

</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .slideleft{
  	transform: rotate(180deg);
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
			slide(){
				this.isCollapse=!this.isCollapse;
			}
    }
  }
</script>
