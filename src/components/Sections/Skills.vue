<template>
  <div id="Skills">

      <Section :title="data.title" :left_band="left_band">

          
          <SubSection>
            <!-- <div id="chips">
                    <Chip v-for="(skill, index) in skills" :key="index" :title="skill"/>
            </div> -->
            
              <div v-for="key in Object.keys(skills)" :key="key">
                <p class="bigger"> <span class="bold">{{ key }} </span>: {{ skills[key] }}</p>
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
  name: 'Skills',

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
      skills: this.data.content,
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

    .bigger {
        font-size:9pt;
    }

    .bold
    {
      font-weight: bold;
      /* font-size:16pt; */
    }
</style>