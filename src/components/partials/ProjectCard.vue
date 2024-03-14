<script>

export default {
  name: 'ProjectCard',
  props: {
    project: Object,
  },
  methods: {
  goToProjectDetails(slug) {
    this.$router.push({ name: 'project-detail', params: { slug } });
    }
  },
  computed: {
    projectImageSrc() {
      // Assumi che `image` sia un URL completo o un percorso relativo da /storage
      return this.project.image.startsWith('http') ? this.project.image : `/storage/${this.project.image}`;
    }
  }
}
</script>

<template>
<div class="col-md-4 p-3"  @click="goToProjectDetails(project.slug)" >
  <div class="card mb-3">
    <img v-if="project.image" :src="projectImageSrc" :alt="`Immagine di ${project.title}`" class="card-img-top">
    <div class="card-body m-2">
        <h5 class="card-title">{{ project.title }}</h5>
        <p><span class="fw-semibold">Type: </span>{{ project.type.name }}</p>
        <h6>Tecnologie:</h6>
        <span class="badge text-bg-primary m-1" v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</span>
        <p class="card-text">{{ project.description }}</p>
        <p class="card-text"><small class="text-muted">{{ project.date }}</small></p>
    </div>
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