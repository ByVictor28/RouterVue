<template>
  <h1>Details Pokemons #{{idPokemon}}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" alt="pokemon">
    <h2>{{pokemon.name}}</h2>
  </div>
  
</template>

<script>
export default {
  props:{
    idPokemon:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      // idPokemon:{
      //   type:String
      // }
      pokemon: null
    }
  },
  created(){
    // const { id } = this.$route.params
    // this.idPokemon = id

    //cuando se define como prop se elimina de los atributos
    // console.log(this.$attrs)
    
    this.getPokemon()
  },
  // updated(){
  //   this.getPokemon()
  // },
  methods:{
    async getPokemon(){
      try {
       
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.idPokemon}`).then(res => res.json())
        console.log(pokemon)
        this.pokemon = pokemon 
      } catch (error) {
        this.$router.push("/")
      }
    }
  },
  watch:{
    idPokemon(){
      this.getPokemon()
    }
  }
}
</script>

<style>

</style>