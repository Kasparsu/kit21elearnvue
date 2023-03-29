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
  <input type="text" v-model="message"> 
  <button v-on:click="message='Goodbye World';">Click me!</button>
  <h1>{{ message }}</h1>
  <h2>{{ message.split('').reverse().join('') }}</h2>
</template>

