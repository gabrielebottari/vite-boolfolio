<script>
import axios from 'axios';

export default {
    data() {
  return {
    project: [],
  };
},
methods: {
    apiSingleProject(){
        const slug = this.$route.params.slug;
    axios.get(`http://127.0.0.1:8000/api/projects/${slug}`)
    .then(response => {
      
      this.project = response.data.results;
    })
    .catch(error => console.error("Errore durante il recupero dei dettagli del progetto:", error));
},
},
computed : {
    projectImageSrc() {
    if (!this.project.image) {
      return ''; 
    }
    return this.project.image.startsWith('http') ? this.project.image : `/storage/${this.project.image}`;
  },
},
mounted(){
		console.log('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug);
      	this.apiSingleProject();
}
};
</script>

<template>

    <div v-if="project && project.type" class="card mb-3 p-2 m-5">
        
        <img v-if="project && project.image" :src="projectImageSrc" :alt="`Immagine di ${project.title}`" class="card-img-top">
    
        <div class="card-body m-2">
            <h5 class="card-title">{{ project.title }}</h5>
            <p><span class="fw-semibold">Type: </span>{{ project.type.name }}</p>
            <h6>Tecnologie:</h6>
            <span class="badge text-bg-primary m-1" v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</span>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><small class="text-muted">{{ project.date }}</small></p>
        </div>
        
    </div>

</template>

<style scoped>
.card {
    height: 600px;
    border: none;

    img {
        max-height: 300px;
    }

    .card-body{

            overflow-y: auto;
            height: 200px;
        
            &::-webkit-scrollbar {
                width: 5px;
            }
        
            &::-webkit-scrollbar-thumb {
                background: gray;
                border-radius: 10px;
            }
        
            &::-webkit-scrollbar-track {
                background: darkgray;
            }
        
        }
}
</style>