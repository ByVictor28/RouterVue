<template>
   <div>
     <ul>
       <li> <router-link to="/pokemon/home">Pokemon</router-link> </li>
       <li> <router-link to="/pokemon/pokemon/1">Pokemon detail</router-link> </li>
       <li> <router-link to="/pokemon/about">About</router-link> </li>
       <li> <router-link to="/dragonball/about">DBZ About</router-link> </li>
       <li> <router-link to="/dragonball/characters">DBZ Characters</router-link> </li>
     </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  ul{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
  }

  .router-link-active{
    color:deepskyblue;
  }
</style>