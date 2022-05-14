<template>
  <div id="Section">

        <h2 :class="{add_margin:left_band}">
            {{title.toUpperCase()}}
        </h2>

        <slot>
        </slot>

  </div>
</template>

<script>

export default {
    name: 'Section',
    components: {
    },
    props: {
        title: {
            type: String,
            required: true,
        },

        left_band: {
            type: Boolean,
            default: false,
        },
    },
    
}
</script>

<style scoped>

    #Section {
        display: flex;
        flex-direction: column;
    }

    .add_margin {
        margin-left:  calc(var(--rect-width) + 10pt);
    }

    h2 {
        margin-left:  10pt;
        font-size: 14pt;
        font-weight: 500;
    }

</style>
