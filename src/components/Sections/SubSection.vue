<template>
    <div id="SubSection">

    <div id="left" v-if="left_band">
        <Rectangle class="rect"/>
    </div>

    <div id="content">

        <div class="sub_header">
            <img v-if="image" v-bind:src="getImgSrc(image)" alt="image" class="image">

            <div>
                <h4 class="title" v-for="(title, index) in titles" :key="index">
                    {{title}}
                </h4>
            </div>
        </div>

        <h4 class="subtitle" v-for="(subtitle, index) in subtitles" :key="index">
            {{subtitle}}
        </h4>

        <div id="date-location">

            <p v-if="start_date != '' && end_date != ''">
                {{start_date}} - {{end_date}}
            </p>

            <p v-if="location != ''">
                {{location}}
            </p>

        </div>

 
        <p id ="description" v-if="description != ''" v-html="description">
        </p>

        <p id ="paragraph" v-if="paragraph != ''" v-html="paragraph">
        </p>

        <slot>
        </slot>
    </div>

    </div>
</template>

<script>
import Rectangle from '@/components/shapes/Rectangle.vue';

export default {
    name: 'SubSection',
    components: {
        Rectangle
    },
    props: {
        titles: {
            type: Array,
            default: () => [],
        },
        subtitles: {
            type: Array,
            default: () => [],
        },
        image: {
            type: String,
            default: '',
        },
        start_date: {
            type: String,
            default: '',
        },
        end_date: {
            type: String,
            default: '',
        },
        location: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        paragraph: {
            type: String,
            default: '',
        },
        left_band: {
            type:Boolean,
            default: false,
        },
    },

    methods: {
        // This method is used to get the current year
        getImgSrc: function (img) {
            return require(`@/assets/images/${img}`);
        },
    },
    
}
</script>

<style scoped>

    #SubSection {
        display: flex;
        margin-bottom: 10pt;
    }

    .sub_header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .sub_header img {
        width: 35pt;
        height: 35pt;
        margin-right: 5pt;
        object-fit: cover;        
    }

    .rect {
        background-color: var(--clr-primary);
    }

    #content {
        display: flex;
        flex-direction: column;
        margin-left: 10pt;
    }

    
    .title {
        font-size: 12pt;
    }

    .subtitle {
        font-size: 10pt;
    }

    #date-location {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--clr-primary);
        font-weight: 500;
        width:80%;
    }

    #description {
        /* color: rgb(90, 90, 90); */
    }


</style>
