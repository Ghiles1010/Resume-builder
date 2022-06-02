<template>
  <div id="Projects">

      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(pr, index) in projects" :key="index"
                    :titles="[pr.title]"
                    :paragraph="markdown(pr.paragraph)"
                    :left_band="left_band"/>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'
import markdown from '@/mixins/markdown'


export default {
  name: 'Projects',
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
