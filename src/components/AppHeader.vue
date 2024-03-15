<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
                <div class="container">
                    <a class="navbar-brand" href="/"><img src="/BOOLFOLIO.png" alt="logo"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Dashboard <i class="fa-solid fa-table-columns"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Progetti <i class="fa-solid fa-diagram-project"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nuovo Progetto <i class="fa-solid fa-plus"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Linguaggi <i class="fa-solid fa-file-code"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tecnologie <i class="fa-solid fa-microchip"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contacts">Contatti <i class="fa-solid fa-address-book"></i></a>
                            </li>
                        </ul>
                        <form method="POST" action="#">
                            <button type="submit" class="btn btn-outline-primary">
                                Log Out <i class="fa-solid fa-right-from-bracket"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
    </header>
</template>

<style lang="scss" scoped>
</style>