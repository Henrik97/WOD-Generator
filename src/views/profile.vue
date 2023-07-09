<template>
    <v-sheet class="background">
    <v-sheet class="container-sheet">
        <div class="card-row-container">
        <v-card v-for="number in cardsRow" class="card-row" elevatio=10>    <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item></v-card>

        </div>

        <div class="container-second-row">
        <div class="card-grid-container">
           <v-card v-for="number in cardGrid" class="card-grid" elevation="10">    <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item></v-card>
        </div>
        <div class="card-column-container">
            <v-card v-for="number in cardsRow" class="card-column" elevation="10">    <v-card-item>
        <v-card-title>This is a title</v-card-title>

        <v-card-subtitle>This is a subtitle</v-card-subtitle>
      </v-card-item></v-card>

        </div>
    </div>
    </v-sheet>
    </v-sheet>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const cardsRow = ref(3)
const cardGrid = ref(8)

</script>

<style lang="scss" scoped>

.background{
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: grey;
    align-items: center;
    
}

.container-sheet{
display: flex;
flex-direction: column;
background-color: white;
width: 60%;
height: 80%;
}

.container-second-row{
    display: flex;
    flex-grow: 2;
}
.card-row-container{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.card-row{
    margin: 10px;
    flex-grow: 1;
    background-color: orange;
}

.card-column-container{
display: flex;
flex-direction: column;
flex-grow: 2;
}
.card-column{
 margin: 10px;
 background-color: antiquewhite;
 flex-grow: 1;
}

.card-grid-container{
    flex-grow: 1;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
}
.card-grid{
    margin: 10px;
    background-color: cadetblue;;
}
</style>