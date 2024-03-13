<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    image: String,
    date: String,
  },
  computed: {
    projectImageSrc() {
      // Assumi che `image` sia un URL completo o un percorso relativo da /storage
      return this.image.startsWith('http') ? this.image : `/storage/${this.image}`;
    }
  }
}
</script>

<template>
<div class="col-md-4 p-3">
  <div class="card mb-3">
    <img v-if="image" :src="projectImageSrc" :alt="`Immagine di ${title}`" class="card-img-top">
    <h5 class="card-title p-2">{{ title }}</h5>
    <div class="card-body m-2">
      <p class="card-text">{{ description }}</p>
      <p class="card-text"><small class="text-muted">{{ date }}</small></p>
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