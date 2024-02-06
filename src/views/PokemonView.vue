:<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from '@/composables/getData'
import { useFavoritosStore } from "@/store/favoritos";

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore();

const {add, findPokemon} = useFavoritos
const { getData, data, loading, dataError } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <p v-if="loading">loading...</p>
    <div class="alert alert-danger" v-if="dataError">{{ dataError }}</div>
    <div v-if="data">
        <img :src="data.sprites?.front_shiny" alt="">
        <h1>Pokemon: {{ $route.params.name }}</h1>
        <ul>
            <li class="list-group-item"><strong>Height:</strong>{{ data.height }}</li>
            <li class="list-group-item"><strong>Weight:</strong>{{ data.weight }}</li>
            <li class="list-group-item"><strong>Pokedex #</strong>{{ data.order }}</li>
        </ul>
        <button     @click="add(data)"
                    :disabled="findPokemon(data.name)"
                    class="btn btn-outline-primary mb-2">
            Agregar Favoritos +
        </button>
    </div>
    <router-link to="/pokemons"
                class="btn btn-outline-primary">
        Volver
    </router-link>
</template>
