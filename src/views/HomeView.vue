<template>
  <MovieCard />
</template>

<script>
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'HomeView',
  components: {
    MovieCard,
}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  z-index: 1;
}

button {
  cursor: pointer;
}
</style>
