<template>
    <div id="Certification">
      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(cr, index) in certifications" :key="index"
                    :titles="[cr.title]"
                    :left_band="left_band">


              
            <p id="description">{{cr.description}}</p>
            

        </SubSection>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'


export default {
  name: 'Certification',

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
      certifications: this.data.content,
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
