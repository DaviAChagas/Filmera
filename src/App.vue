<template>
  <HeaderComponent />
  <FavoriteSideBar />
  <CartSideBar />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FavoriteSideBar from './components/FavoriteSideBar.vue'
import CartSideBar from './components/CartSideBar.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FavoriteSideBar,
    CartSideBar,
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap');

* {
  margin: 0;
  padding: 0;
  z-index: 1;
}

#app {
overflow-x: hidden;
min-height: 100vh;
background-image: linear-gradient(#0d1626,#0a0615);
}

.movie, button, div{
    color:  #FAFAFA;
    font-family: 'Be Vietnam Pro', sans-serif;
}

button {
  cursor: pointer;
}

.infos button:hover {
   background-color: #ff6f40;
}

body::-webkit-scrollbar {
  width: 12px;               
}

body::-webkit-scrollbar-track {
  background: #0c0717;        
}

body::-webkit-scrollbar-thumb {
  background-color: #ff6f40;   
  border-radius: 20px;       
}


@media screen and (max-width: 700px) {
.sidebar {
  width: 70vw;
}
}
</style>
