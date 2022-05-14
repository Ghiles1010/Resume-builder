<template>
  <div id="Chip">

    <p>{{title}}</p>

  </div>
</template>

<script>
export default {
  name: 'Chip',

  props: {
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

#Chip {

  color: white;
  background-color: var(--clr-gray);
  padding: 5pt;
  border-radius: 5pt;
  margin: 0 4pt 4pt 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#Chip p{
  font-size: 8pt;
}

</style>
