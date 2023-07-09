<script lang="ts" setup>
import topBar from './components/topBar.vue';
import ApplicationPage from './views/applicationPage.vue';
</script>

<template>
<v-app>
  <topBar width="100%"></topBar>
  <v-main height="100%">
    <ApplicationPage></ApplicationPage>
  </v-main>
</v-app>
</template>

<style scoped>
</style>
