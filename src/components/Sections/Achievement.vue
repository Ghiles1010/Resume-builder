<template>
    <div id="Achievement">
      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(ac, index) in achievements" :key="index"
                    :titles="[ac.title]"
                    :left_band="left_band">


              
            <p id="description">{{ac.description}}</p>
            

        </SubSection>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'


export default {
  name: 'Achievement',

  props:{
    data : {
      type: Object,
      required: true,
    },

    left_band: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      achievements: this.data.content,
    }
  },

  components: {
    Section,
    SubSection,

  },
}
</script>

<style scoped>

#description {
    color: gray;
}


</style>
