<template>
    <v-sheet height="100%" color="grey">
        <WorkoutCard :workoutFormat="generatedWorkout" ></WorkoutCard>
    </v-sheet>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import WorkoutCard from '../components/workoutCard.vue';



const generatedWorkout = computed(() => {

    return ({
        id: 'test123',
        workoutTitle: 'Death By Burpees',
        workoutTimeCap: '1 hour',
        workoutDescription: '10 burpee EMOM'

    })


})


</script>