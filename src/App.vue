<template>
  <div id="app">


    <CV/>

  </div>
</template>

<script>

import CV from './views/CV.vue'


// import  jsPDF  from "jspdf"
export default {
  name: 'App',
  components: {
    CV,
  },

  
}
</script>

<style>

#app {
  height: 100%;
  width: 100%;
}

*{
  font-family: Ubuntu;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

p{
  font-size: 8pt;
}

</style>


