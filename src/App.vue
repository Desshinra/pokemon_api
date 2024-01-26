<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Image and text -->
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img 
          src="./assets/logo.svg" 
          width="30" 
          height="30" 
          class="d-inline-block align-top" 
          alt=""
        />
        POKEAPI
      </router-link>
      <div>
        <router-link class="btn btn-outline-primary me-2" to="/"
          >Home</router-link>
        <router-link class="btn btn-outline-primary" to="/pokemons"
          >Pokemons</router-link>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />
  </div>
</template>

