<template>
    <v-card
     :title="workoutTitle"
     :subtitle="workoutTimeCap"
     :text="workoutDescription"
    
     height="300px"
     width="300px"
     rounded="50"
     
     >
     <v-card-action>
       <v-btn-toggle v-model="savedWorkout" color="red"    variant="plain" rounded> 
        <v-btn
                    class="ms-2"
                    icon="mdi-heart"
                    :color="savedWorkout ? 'white' : 'red'"
                  ></v-btn>
        </v-btn-toggle>
     </v-card-action>
     <v-alert v-if="savedWorkout === 0" type="success" text="Saved"></v-alert>
    </v-card>

    
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import  {WorkoutFormat} from '../models/workoutStructure';


defineProps<{
  workoutTitle: string,
  workoutTimeCap: string,
  workoutDescription:string
}>();


const savedWorkout = ref(null)
 

</script>

<style lang="scss" scoped></style>