<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
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
<div class="col-md-4 p-3">
  <div class="card mb-3">
    <img v-if="project.image" :src="projectImageSrc" :alt="`Immagine di ${project.title}`" class="card-img-top">
    <div class="card-body m-2">
        <h5 class="card-title">{{ project.title }}</h5>
        <p>Type: {{ project.type.name }}</p>
        <h6>Tecnologie:</h6>
        <ul>
        <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
        </ul>
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
                background: darken($color: #aaa, $amount: 20%);
                border-radius: 10px;
            }
        
            &::-webkit-scrollbar-track {
                background: lighten($color: #aaa, $amount: 20%);
            }
        
        }
}
</style>