<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-col :span="8" class="lemon_logo">
                <img src="../../../static/default/image/common/logo.png" alt="">
                <div class="navbar_header_logo_home">
                  <i class="icon-home"></i>
                </div>
              </el-col>
              <el-col :span="8">1</el-col>
              <el-col :span="8">1</el-col>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-col :span="8">1</el-col>
              <el-col :span="8">1</el-col>
              <el-col :span="8">1</el-col>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<script>
require("../../../static/default/style/index/index.scss")
export default {
}
</script>
