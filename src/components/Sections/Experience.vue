<template>

<div id="Experience">

    <Section :title="data.title" :left_band="left_band">

    <SubSection v-for="(exp, index) in experiences" :key="index"
                :titles="[exp.title, exp.entity]" :start_date="exp.start_date"
                :end_date="exp.end_date" :location="exp.location" :description="exp.description"
                :left_band="left_band">


            <Itemize class="items" :title="exp.itemize.title" :items="exp.itemize.items"
            :nb_cols="1"/>
      
    </SubSection> 

    </Section>
</div>
</template>


<script>

import Section from '@/components/Sections/Section.vue'
import SubSection from '@/components/Sections/SubSection.vue'
import Itemize from '@/components/widgets/Itemize.vue'


export default {
  name: 'Experience',

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
      experiences: this.data.content,
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
