import { createStore } from 'vuex'

export default createStore({
  state: {
    movies: [],
    genres: [],
    cartList: [],
    favoriteList: [],
    isCartOpen: false,
    isFavoriteOpen: false,
    API_KEY: process.env.VUE_APP_API_KEY
},

  getters: {

  },

  mutations: {

    fetchMovies(state) {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${state.API_KEY}&language=en-US&page=1`)
          .then(res => { return res.json(); })
          .then(res => {
            state.movies = res.results   
              state.movies.forEach(movie => {
                movie.price = (Math.floor(
                  Math.random() * (30 - 20 + 1) ) + 20) + 0.99
          })
  })
          .catch(err => console.log(err));
  },

  fetchGenres(state) {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${state.API_KEY}&language=en-US`)
          .then(res => { return res.json(); })
          .then(res => state.genres = res.genres)
          .catch(err => console.log(err));
  },

  addToCart(state, movie) {
    state.cartList.push(movie)  
  },

  addToFavorite(state, movie) {
    state.favoriteList.push(movie)  
    state.favoriteList = [... new Set(state.favoriteList)]
},

  toggleCartBar(state) {
    state.isCartOpen = !state.isCartOpen
    state.isFavoriteOpen = false
  },

  toggleFavoriteBar(state) {
    state.isFavoriteOpen = !state.isFavoriteOpen
    state.isCartOpen = false
  },

  deleteFavoriteItem(state, movie) {
    state.favoriteList = state.favoriteList.filter(item => {
      if(item.id != movie.id) {
        return item
      }
    })
  },
  
  deleteCartItem(state, movie) {
    state.cartList = state.cartList.filter(item => {
      if(item.id != movie.id) {
        return item
      }
    })
  },

  cleanFavoriteList(state) {
    state.favoriteList = state.favoriteList.filter(item => {
      item.id !== 0
    })
  },  
  
  cleanCartList(state) {
    state.cartList = state.cartList.filter(item => {
      item.id !== 0
    })
  },  

},
  actions: {

  },
  modules: {

  }
})
