<template>
  <div id="Itemize">

    <p class="title">{{title}}</p>

    <ul :style="ul_style" class="round">
        <li v-for="(item, index) in items" :key="index" v-html="markdown(item)"></li>
    </ul>

  </div>
</template>

<script>

import markdown from '@/mixins/markdown'

export default {
  name: 'Itemize',
  mixins: [markdown],
  props: {
        title: {
        type: String,
        required: true,
        },

        items: {
        type: Array,
        required: true,
        },

        nb_cols: {
          type: Number,
          default: 2,
        },

    },

  computed: {
    ul_style() {
      return {
        'grid-template-columns': `repeat(${this.nb_cols}, 1fr)`,
      }
    },
  }
      
}
</script>

<style scoped>

.title{
    color: var(--clr-primary);
    font-size: 9pt;
    margin-bottom: 2pt;
}

ul{
  
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
    text-indent: -1rem;
    padding-left: 1rem;
    row-gap: 1pt;
}


ul.round li::before{
  content: "";
  position: relative;
  width: 4pt;
  height: 4pt;
  background: var(--clr-primary);
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;
}


li{
  font-size: 9pt;
} 
</style>
