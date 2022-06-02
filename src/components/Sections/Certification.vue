<template>
    <div id="Certification">
      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(cr, index) in certifications" :key="index"
                    :titles="[cr.title]"
                    :left_band="left_band"
                    :description="markdown(cr.description)">
        </SubSection>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'

import markdown from '@/mixins/markdown'


export default {
  name: 'Certification',
  mixins: [markdown],

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
