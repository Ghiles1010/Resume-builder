<template>

    <div id="CV" @click.ctrl="generate_pdf">

        <div class="header">
            <Header :data="this.cv_data.personnal"/>
        </div>

        <div class="content">

            <div class="col1">
                <Education :data="this.cv_data.education" :left_band="true"/>
                <Experience :data="this.cv_data.experience" :left_band="true"/>
                <Volunteering :data="this.cv_data.volunteering" :left_band="true"/>
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
// import cv_data from '@/data/cv_visa.json'
// import cv_data from '@/data/cv_fr.json'
import cv_data from '@/data/cv.json'


import Header from '@/components/Header.vue'
import Education from '@/components/Sections/Education.vue'
import Experience from '@/components/Sections/Experience.vue'
import Volunteering from '@/components/Sections/Volunteering.vue'
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
        Volunteering,
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

        // doc.addFont('Ubuntu', 'Ubuntu', 'normal');

        // change font
        // doc.setFont('Ubuntu');

        // print disponible fonts
        console.log(doc.getFontList());

        let options = {
            callback: function (doc) {
                doc.save();
            }
        }

        var pageCount = doc.internal.getNumberOfPages();

        console.log(pageCount);

        if (pageCount>1){
            console.log(pageCount);
            doc.deletePage(pageCount);
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
    flex: 20 1 0;
}

.col2 {
    flex: 22 1 0;
    padding-right: 5pt;
}

</style>
 