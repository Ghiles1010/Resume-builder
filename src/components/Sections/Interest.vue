<template>
  <div id="Interest">

      <Section :title="data.title" :left_band="left_band">

          
          <SubSection>
            <div id="chips">
                    <Chip v-for="(inter, index) in interests" :key="index" :title="inter"/>
            </div>
          </SubSection>


      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import Chip from '@/components/widgets/Chip.vue'
import SubSection from '@/components/Sections/SubSection.vue'

export default {
  name: 'Interest',

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
      interests: this.data.content,
    }
  },


  components: {
    Section,
    SubSection,
    Chip,
  },
}
</script>

<style scoped>

    #chips {
        margin-top: 2pt;
        display: flex;
        flex-wrap: wrap;
    }

</style>