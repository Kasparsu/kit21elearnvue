<script>
  export default {
      data(){
        return {
          message: 'Hello World'
        }
      }
  }
</script>

<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view></router-view>
</template>

