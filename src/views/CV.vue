<template>

    <div id="CV" @click.ctrl="generate_pdf">

        <div class="header">
            <Header :data="this.cv_data.personnal"/>
        </div>

        <div class="content">

            <div class="col1">
                <Experience v-if="this.cv_data.experience" :data="this.cv_data.experience" :left_band="true"/>
                <Education v-if="this.cv_data.education" :data="this.cv_data.education" :left_band="true"/>
            </div>
            
            <div class="col2">
                <Skills v-if="this.cv_data.skills" :data="this.cv_data.skills"/>
                <Projects v-if="this.cv_data.projects" :data="this.cv_data.projects"/>
                <Volunteering v-if="this.cv_data.volunteering" :data="this.cv_data.volunteering"/>
                <Certification v-if="this.cv_data.certifications" :data="cv_data.certifications"/>
                <Achievement v-if="this.cv_data.achievements" :data="this.cv_data.achievements"/>
                <Languages v-if="this.cv_data.languages" :data="this.cv_data.languages"/>
                <Interest v-if="this.cv_data.interests" :data="this.cv_data.interests"/>
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
import html2canvas from 'html2canvas'



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

    async generate_pdf(){
        let cv_div = document.getElementById('CV');
        
        // Compute dynamic page height to keep single page, fixed width
        const cvWidthPx = cv_div.scrollWidth;
        const cvHeightPx = cv_div.scrollHeight;
        const pageWidthMm = 210; // fixed width
        const pageHeightMm = (cvHeightPx * pageWidthMm) / cvWidthPx; // scale height

                const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [cvWidthPx, cvHeightPx],
          hotfixes: ['px_scaling'],
          compress: true
        });

        await doc.html(cv_div, {
            x: 0,
            y: 0,
            margin: [0, 0, 0, 0],
            width: cvWidthPx,
            windowWidth: cvWidthPx,
            html2canvas: {
                scale: 1,
                useCORS: true,
                backgroundColor: '#ffffff'
            },
            callback: (d) => d.save('CV.pdf')
        });
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
    flex: 27 1 0;
}

.col2 {
    flex: 20 1 0;
    padding-right: 5pt;
}

</style>
 
 