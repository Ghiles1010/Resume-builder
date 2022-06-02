<template>
    <div id="Achievement">
      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(ac, index) in achievements" :key="index"
                    :titles="[ac.title]"
                    :left_band="left_band"
                    :description="markdown(ac.description)">
            

        </SubSection>

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'
import markdown from '@/mixins/markdown'

export default {
  name: 'Achievement',
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
