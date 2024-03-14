<script>
import ProjectCard from '../partials/ProjectCard.vue';
import axios from 'axios';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
            totalPages: null,
        };
    },
    methods: {
    getApi(page = 1) {
        axios.get(`http://127.0.0.1:8000/api/projects?page=${page}`)
            .then(response => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.totalPages = response.data.results.last_page;
            })
            .catch(error => console.error("Errore durante il recupero dei progetti:", error));
        }
    },
    mounted() {
        this.getApi();
    }
}
</script>


<template>

    <div class="container">

    <h1 class="text-primary text-center p-5">Progetti</h1>
        <a class="btn btn-primary mb-3 ms-4">
            Crea Nuovo Progetto <i class="fa-solid fa-plus"></i>
        </a>
        <div class="row p-3">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>

        <div class="button-container d-flex justify-content-between m-auto w-75">
            <button class="btn btn-primary" @click="getApi(currentPage - 1)" :disabled="currentPage <= 1"><i class="fa-solid fa-left-long"></i> Previous</button>
            <button class="btn btn-primary" @click="getApi(currentPage + 1)" :disabled="currentPage >= totalPages">Next <i class="fa-solid fa-right-long"></i></button>
        </div>

    </div>

</template>

<style lang="scss" scoped>
main {
    background-color: azure;
}
</style>