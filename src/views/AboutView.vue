<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase.js'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import PokemonCard from '../components/PokemonCard.vue'

const pokemons = ref([])
async function getPokemon() {

  onSnapshot(collection(db, 'pokemons'), (querySnapshot) => {
    let pokemonSnapshot = []
    querySnapshot.forEach((doc) => {
      let pokemon = {
        id: doc.id,
        name: doc.data().name,
        'Type 1': doc.data()['Type 1'],
        'Type 2': doc.data()['Type 2'],
        'Japanese Name': doc.data()['Japanese Name'],
        Species: doc.data().Species,
        Ablilities: doc.data().Ablilities,
        Evolution: doc.data().Evolution,
        image_url: doc.data().image_url,
        'Evolutionary line': doc.data()['Evolutionary line']
      }
      pokemonSnapshot.push(pokemon)
    })
    pokemons.value = pokemonSnapshot
  })
}

onMounted(async () => {
  console.log("Connecting to Firebase")
  await getPokemon()
})

</script>

<template>
  <div class="about">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>