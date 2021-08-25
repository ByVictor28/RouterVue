<template>
  <div class="layout">
    <router-link to="/dragonball/about">about</router-link>
    <router-link to="/dragonball/characters">characters</router-link>
    
    <h3>Dragon Ball Z Layout</h3>
    <router-view></router-view>

  </div>
</template>

<script>
export default {

}
</script>

<style>
  .layout{
    background: deepskyblue;
  }
</style>