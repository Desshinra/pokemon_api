<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';


const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
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
            {{ pokemon.name }}
        </li>
    </ul>
</template>
