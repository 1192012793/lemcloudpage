<template>
  <div>
   <v-checkboxList :numbering="numbering"></v-checkboxList>
  </div>
</template>

<script>
import vCheckboxList from '../../../../components/CheckboxList.vue';

export default {
  components:{
   vCheckboxList
  },
  data() {
      return {
          numbering:'编号'
      }
  }
}
</script>