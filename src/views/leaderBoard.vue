<template>
    <v-sheet class="main-content">
        <LeaderboardTable></LeaderboardTable>
    </v-sheet>
</template>

<script lang="ts" setup>
import LeaderboardTable from '../components/leaderboardTable.vue'

</script>

<style lang="scss" scoped>
.main-content{
    height: 100%;
    width: 100%;
    background-color: blueviolet;
}


</style>