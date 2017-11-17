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

