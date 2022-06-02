    <template>
  <div id="header">

    <div class="header-band">
        <Rectangle class="rect" />
    </div>

    <div class="header-left">

        <h1>{{this.full_name}}</h1>
        <h3>{{data.title}}</h3>
        <p v-html="markdown(data.description)"></p>

    </div>

    <div class="header-center">

        <div class="image-wrapper">
            <img src="@/assets/profile.jpg"/>
        </div>
        
    </div>

    <div class="header-right">

        <div class="wrapper-grid">

            <p>{{data.email}}</p>
            <img src="@/assets/icons/envelope-solid.png"/>

            <p>{{data.phone}}</p>
            <img src="@/assets/icons/mobile-solid.png"/>
            
            <!-- <p>{{data.location}}</p>
            <img src="@/assets/icons/location-dot-solid.png"/> -->

            <p>{{data.linkedin}}</p>
            <img src="@/assets/icons/linkedin-brands.png"/>

            <p>{{data.github}}</p>
            <img src="@/assets/icons/github-brands.png"/>

        </div>

    </div>       

</div>
</template>

<script>
import Rectangle from '@/components/shapes/Rectangle.vue';
import markdown from '@/mixins/markdown';

export default {
  name: 'Header',
  mixins: [markdown],

    components: {
        Rectangle,
    },

    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    // data full name Uppercase
    data() {
        return {
            full_name: this.data.first_name + " " + this.data.last_name.toUpperCase(),
        }
    },
}
</script>

<style scoped>

    #header {
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: solid;
        border-bottom-width: 2px;
        border-bottom-color: var(--clr-secondary);    
        padding: 10pt 10pt 10pt 0;

    }

    .header-band {
        width: fit-content;
        height: 100%;
        background: var(--clr-secondary);
        margin: 5pt 10pt 0 0;
    }

    .rect{
        background-color: var(--clr-secondary);
    }

    /* Left */

    .header-left{
        display: flex;
        flex-direction: column;
        flex: 2 1 0;
        
    }

    .header-left h1 {
        color: var(--clr-secondary);
        font-weight: 400;
    }

    .header-left h3 {
        color: var(--clr-primary);
        font-weight: 400;
    }

    .header-left p {
        margin-top: 0.5rem;
        font-size: 10pt;
        
    }

    /* Center */

    .header-center{
        display: flex;
        justify-content: center;
        flex: 1 1 0;
    }


    .header-center .image-wrapper {
        width : 8rem;
        height : 8rem;
        border-radius: 50%;
        background-color: var(--clr-secondary);
        border:solid;
        border-color: var(--clr-primary);
        border-width: 3px;
    }

    .header-center img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    /* Right */

    .header-right{
        flex: 2 1 0;
        color: black;
        display: flex;
        justify-content: flex-end;
    }

    .header-right p, a{
        font-size: 9pt;
        text-align: right;
    }

    .header-right i{
        font-size: 12pt;
    }

    .wrapper-grid {
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-gap: 0.5rem;
        justify-items: flex-end;
    }

    .header-right .wrapper-grid img {
        width: auto;
        height: 13pt;
    }

    .bold{
        font-family: Helvetica;
        font-weight: bold;
        /* color: var(--clr-secondary); */
    }



</style>
