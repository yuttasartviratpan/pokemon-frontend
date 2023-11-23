/* eslint-disable no-undef */
const admin = require('firebase-admin')
const serviceAccount = require('./serviceKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

// const jsonFilePath = 'https://github.com/yuttasartviratpan/pokemon-data/blob/main/db.json'
fetch('https://raw.githubusercontent.com/yuttasartviratpan/pokemon-data/main/db.json')
    .then(res => res.json())
    .then(json => {
        // const jsonData = require(json)

        const pokemonsData = json['Pokemons']

        pokemonsData.forEach(async (pokemon) => {
            try {
                await db.collection('pokemons').doc(pokemon.id.toString()).set(pokemon)
                console.log(`Pokemon ${pokemon.name} successfully added to Firestore`)
            } catch (error) {
                console.error(`Error adding Pokemon ${pokemon.name}: `, error)
            }
        })
        console.log('Data import process completed.')
    })
// const jsonData = require(jsonFilePath)
//
// const pokemonsData = jsonData['Pokemons']
//
// pokemonsData.forEach(async (pokemon) => {
//     try {
//         await db.collection('pokemons').doc(pokemon.id.toString()).set(pokemon)
//         console.log(`Pokemon ${pokemon.name} successfully added to Firestore`)
//     } catch (error) {
//         console.error(`Error adding Pokemon ${pokemon.name}: `, error)
//     }
// })
