<template>
    <v-sheet class="main-content">
        <WorkoutCard :workoutTitle="generatedWorkout.workoutTitle"
        :workoutTimeCap="generatedWorkout.workoutTimeCap"
        :workoutDescription="generatedWorkout.workoutDescription" ></WorkoutCard>
        <v-btn class="generate-button" x-large>Generate</v-btn>
    </v-sheet>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import WorkoutCard from '../components/workoutCard.vue';



const generatedWorkout = computed(() => {

    return ({
        workoutTitle: 'Death By Burpees',
        workoutTimeCap: '1 hour',
        workoutDescription: '10 burpee EMOM'

    })


})


</script>

<style lang="scss" scoped>
.main-content{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:antiquewhite;
}

.generate-button {
    margin: 10px;
}
</style>