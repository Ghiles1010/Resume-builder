<template>
  <div id="Languages">

      <Section :title="data.title" :left_band="left_band">

          
          <SubSection>
            <div id="lang_container">
                <div id="lang_wrap" v-for="(lang, index) in languages" :key="index">
                    <p id="lang_name">{{lang.name}}</p>
                    <p id="lang_level">{{lang.level}}</p>
                </div>
            </div>
          </SubSection>


      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'

export default {
  name: 'Languages',

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
      languages: this.data.content,
    }
  },

  components: {
    Section,
    SubSection,
  },
}
</script>

<style scoped>

    #lang_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40pt;
        grid-row-gap: 5pt;

    }

    #lang_wrap {
        display: flex;
        flex-direction: column;
    }

    #lang_level {
        color: var(--clr-primary);
    }

</style>