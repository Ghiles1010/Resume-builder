<template>
  <div id="Projects">

      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(pr, index) in projects" :key="index"
                    :titles="[pr.title]"
                    :left_band="left_band">


              <div>
                <p>{{pr.description}}</p>
              </div>
            

        </SubSection>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'


export default {
  name: 'Projects',

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
      projects: this.data.content,
    }
  },

  components: {
    Section,
    SubSection,

  },
}
</script>

<style scoped>

</style>
