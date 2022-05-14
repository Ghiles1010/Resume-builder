<template>

    <div id="CV" @click.ctrl="generate_pdf">
        <!-- <input  /> -->

        <div class="header">
            <Header/>
        </div>

        <div class="content">

            <div class="col1">
                <Education :data="this.cv_data.education" :left_band="true"/>
                <Experience :data="this.cv_data.experience" :left_band="true"/>
            </div>

            <div class="col2">
                <Skills :data="this.cv_data.skills"/>
                <Projects :data="this.cv_data.projects"/>
                <Certification :data="cv_data.certifications"/>
                <Achievement :data="this.cv_data.achievements"/>
                <Languages :data="this.cv_data.languages"/>
                <Interest :data="this.cv_data.interests"/>
            </div>

        </div>

    </div>
    
</template>

<script>
import cv_data from '@/data/cv.json'
import Header from '@/components/Header.vue'
import Education from '@/components/Sections/Education.vue'
import Experience from '@/components/Sections/Experience.vue'
import Skills from '@/components/Sections/Skills.vue'
import Projects from '@/components/Sections/Projects.vue'
import Certification from '@/components/Sections/Certification.vue'
import Achievement from '@/components/Sections/Achievement.vue'
import Languages from '@/components/Sections/Languages.vue'
import Interest from '@/components/Sections/Interest.vue'


import jsPDF from "jspdf"



export default {
  name: 'CV',
    components: {
        Header,
        Education,
        Experience,
        Skills,
        Projects,
        Certification,
        Achievement,
        Languages,
        Interest,
    },

    data() {
        return {
            cv_data: cv_data,
        };
    },
    methods:{

    generate_pdf(){

        let cv_div = document.getElementById('CV');

        var doc = new jsPDF('p', 'px', [cv_div.offsetWidth, cv_div.offsetHeight]);   

        doc.addFont('Ubuntu-Regular.ttf', 'Ubuntu', 'normal');

        doc.addSvgAsImage('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>'
        ,0,
        0,
        10,
        10);
        


        let options = {
            callback: function (doc) {
                doc.save();
            }
        }


        doc.html(cv_div, options);
    }
  }

}
</script>

<style scoped>

#CV {
    display: flex;
    flex-direction: column;
    background: white;
    height: 100%;
    width: 100%;
}

.content {
    margin-top: 10pt;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.col1 {
    flex: 1 1 0;
}

.col2 {
    flex: 1 1 0;
    padding-right: 5pt;
}

</style>
 