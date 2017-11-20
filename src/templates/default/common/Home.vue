<template>
  <div class="ajac_dom">
    <home-content></home-content>
    <home-heard></home-heard>
  </div>
</template>

<script>
import HomeContent from "./Home_content/Home_content.vue"
import HomeHeard from "./Home_heard/Home_heard.vue"
export default {
  components: {
    HomeContent, HomeHeard
  }
}
</script>

