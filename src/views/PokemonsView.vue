<script setup>
import { RouterLink } from "vue-router";
import {useGetData} from '@/composables/getData'

const { data, getData, loading, dataError  } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading"> Cargando información... </p>
    <div class="alert alert-danger" v-if="dataError">{{ dataError }}</div>
    <div v-if="data">
        <ul>
            <li class="list-group-item" 
                v-for="pokemon in data.results" 
                :key="pokemon.id">
                <router-link :to="`/pokemons/${pokemon.name}`">{{ 
                    pokemon.name 
                }}</router-link>
            </li>
        </ul>
        <div class="mt-2">
            <button class="btn btn-succes me-2" 
                @click="getData(data.previous)"
                :disabled="!data.previous">
            Previous
            </button>
            <button class="btn btn-primary" 
                    @click="getData(data.next)"
                    :disabled="!data.next">
                Next
            </button>
        </div>
        
    </div>
</template>
