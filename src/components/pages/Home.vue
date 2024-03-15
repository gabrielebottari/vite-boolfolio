<script>
export default {
  name:'Home',
}

</script>
<template>
  <div class="container p-5">
    <div class="row">
        <div class="col">
            <div class="bg-primary-subtle">
                <div class="p-5">
                    <h1 class="text-center text-primary">
                        Sei loggato! <i class="fa-solid fa-hands-clapping"></i>
                    </h1>

                    <h3 class="mb-3">
                        Benvenuto! <i class="fa-solid fa-hand-point-right"></i>
                    </h3>

                    <div class="d-flex justify-content-between w-50 m-auto">
                        <a class="btn btn-primary mb-3" href="/projects">Dai un'occhiata a tutti i Progetti <i class="fa-solid fa-diagram-project"></i></a>

                        <a class="btn btn-primary mb-3" href="/contacts">Oppure Contattaci! <i class="fa-solid fa-address-book"></i></a>
                    </div>


                    <div class="d-flex justify-content-center">
                        <img src="/login.webp" alt="login" class="w-50">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>