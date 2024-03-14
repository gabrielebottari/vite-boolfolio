<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';

export default {
    data() {
        return {

        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    }
}
</script>

<template>

<AppHeader />
<router-view></router-view>

</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";

</style>