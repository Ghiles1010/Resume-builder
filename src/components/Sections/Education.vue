<template>
  <div id="Education">

      <Section :title="data.title" :left_band="left_band">

        <SubSection v-for="(edu, index) in educations" :key="index"
                    :titles="[edu.title, edu.school]" :start_date="edu.start_date"
                    :end_date="edu.end_date"
                    :left_band="left_band">


              <Itemize class="items" :title="edu.itemize.title" :items="edu.itemize.items"/>
            

        </SubSection> 

      </Section>
  </div>
</template>

<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'
import Itemize from '@/components/widgets/Itemize.vue'


export default {
  name: 'Education',

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
      educations: this.data.content,
    }
  },

  components: {
    Section,
    SubSection,
    Itemize,
  },
}
</script>

<style scoped>
.items
{
  margin-top: 2pt;
}
</style>
