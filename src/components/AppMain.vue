<script>
import axios from 'axios';


export default {
    data() {
        return {

        };
    },
    methods:{
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(results =>{
            console.log(results.data);
          })
      }
    },
    mounted(){
      this.getApi();
    }
}
</script>


<template>

</template>

<style lang="scss" scoped>
</style>