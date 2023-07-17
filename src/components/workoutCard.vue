<template>
    <v-card
     :title="workoutTitle"
     :subtitle="workoutTimeCap"
     :text="workoutDescription"
    
     height="300px"
     width="300px"
     >
     <v-card-action>
       <v-btn-toggle v-model="savedWorkout">
            <v-btn :color="savedWorkout ? 'white' : 'red'" icon="mdi-heart">save</v-btn>
        </v-btn-toggle>
     </v-card-action>

    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import  {WorkoutFormat} from '../models/workoutStructure';


defineProps<{
  workoutTitle: string,
  workoutTimeCap: string,
  workoutDescription:string
}>();


const savedWorkout = ref(null)

</script>

<style lang="scss" scoped></style>