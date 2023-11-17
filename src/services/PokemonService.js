import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/yuttasartviratpan/pokemon-data',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPokemons() {
        return apiClient.get('/pokemons')
    },
    getPokemon(id) {
        return apiClient.get('/pokemons/' + id)
    }
}
