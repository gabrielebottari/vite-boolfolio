<script>
import ProjectCard from './partials/ProjectCard.vue';
import axios from 'axios';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    getApi() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
          this.projects = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>


<template>



<main class="container">
    <div class="container">
    <h1 class="text-primary text-center">Progetti</h1>
        <a class="btn btn-primary mb-3 ms-4">
            Crea Nuovo Progetto <i class="fa-solid fa-plus"></i>
        </a>
        <div class="row p-3">
            <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :date="project.date"
            />
        </div>
    </div>
</main>

</template>

<style lang="scss" scoped>
main {
    background-color: azure;
}
</style>