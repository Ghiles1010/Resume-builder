<template>

<div id="Volunteering">

    <Section :title="data.title" :left_band="left_band">

    <SubSection v-for="(vol, index) in volunteerings" :key="index"
                :titles="[vol.title, vol.entity]" :start_date="vol.start_date" :image="vol.image"
                :end_date="vol.end_date" :location="vol.location" :description="vol.description"
                :left_band="left_band">


            <Itemize class="items" :title="vol.itemize.title" :items="vol.itemize.items"
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
  name: 'volunteering',

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
      volunteerings: this.data.content,
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
