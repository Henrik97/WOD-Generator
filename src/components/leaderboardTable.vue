<template>
    <v-card   class="elevation-20">
    <v-card-title>
      Leaderboard
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headersTest"
        :items="athelteList"
        :search="search"
    ></v-data-table>
  </v-card>
</template>

<script setup  lang="ts">
import {ref} from 'vue';

const search = ref('')
const headersTest = ref([
    { key: 'name', title: 'Name'}, 
    { key: 'time', title: 'Time'}, 
    { key: 'nationality', title: 'Nationality',}])
const athelteList = ref([
    {name: "Bobby", time: "22:21:33", nationality:'DEN'}, 
    {name: "Timmy", time: "22:22:33", nationality:'DEN'}])

</script>

<style lang="scss" scoped>

</style>