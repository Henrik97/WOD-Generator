<template>
    <div class="top-bar">
    <v-topbar>
        <v-tabs
        v-model="page"
        align-tabs="center">
        <v-tab v-for="tab in tabs" @click="goToPage(tab.path)">{{ tab.title }}</v-tab>
        </v-tabs>
    </v-topbar>
</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import router from '../router';
const page = ref(0);

const tabs = ref([{title: "Workout", path: '/'}, {title: "Leader Board", path:'/leader-board'}, {title:"Profile", path: '/profile'}])

const goToPage = (path: string) => {
    router.push({path})
}
</script>

<style lang="scss" scoped>
.top-bar {
    width: 100%;
}
</style>