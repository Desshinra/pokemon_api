<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';
import {RouterLink} from 'vue-router'


const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const {remove} = useFavoritos
</script>


<template>
    <h1>
        FAVORITOS:
    </h1>
    <p v-if="favoritos.length === 0">
        SIN FAVORITOS
    </p>
    <ul class="list-group" v-else>
        <li class="list-group-item" 
            v-for="pokemon in favoritos" 
            :key="pokemon.id"
            >
            <div>
                {{ pokemon.name }}
            </div>
            <div>
                <router-link :to="`/pokemons/${pokemon.name}`" class="btn btn-sm btn-primary me-2">
                    More info
                </router-link>
                <button class="btn btn-sm btn-danger " @click="remove(pokemon.id)">
                    remove
                </button>
            </div>
        </li>
    </ul>
</template>
