<template>
    <v-card
     :title="WorkoutFormat.workoutTitle"
     :subtitle="WorkoutFormat.workoutTimeCap"
     :text="WorkoutFormat.workoutDescription"
     :key="workoutFormat.id"
     variant="tonal"
     height="300px"
     width="300px"
     >
     <v-card-action>
       <v-btn-toggle v-model="savedWorkout">
            <v-btn icon="mdi-heart"></v-btn>
        </v-btn-toggle>
     </v-card-action>

    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import  { WorkoutFormat } from '../models/workoutFormat'

defineProps<{
  workoutFormat: WorkoutFormat
}>();


const savedWorkout = ref(null)

</script>

<style lang="scss" scoped></style>