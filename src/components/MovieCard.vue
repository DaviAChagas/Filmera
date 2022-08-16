<template>
 <div class="cardContainer" >
    <div class="MovieCard" v-for = "movie in $store.state.movies"
        v-bind:key = "movie.id">

  <div :style="{'backgroundImage': `url(${'https://image.tmdb.org/t/p/w400/' + movie.poster_path}`}" class="poster">

            <ul class="movie genres">

                <li v-for="genreId in movie.genre_ids" v-bind:key="genreId">
                 <span v-if=" $store.state.genres.find(genre => genre.id === genreId)">
                    {{ $store.state.genres.find(genre => genre.id === genreId).name }}
                    </span>
                </li>

            </ul>

        <button @click.stop.prevent="$store.commit('addToFavorite', movie)">
          <img src="../assets/favorite.png" alt="">
        </button>

                <h3 class="movie date">{{movie.release_date}}</h3>
        </div>

        <div class="otherInfos">

            <div class="title">
                <h3 class="movie ">{{movie.title}}</h3>
            </div>

            <div class="avarage">
                <img src="../assets/star.png" alt="">
                <h3 class="movie">{{movie.vote_average}}</h3>
            </div>

            <span class="movie price"> 
                {{movie.price}}
</span>

                <button class="cart" @click.stop.prevent="$store.commit('addToCart', movie)">
                 Add   
                </button>

        </div>
    </div>
 </div>   

</template>


<script>
export default {
    name: "MovieCard",
    data() {
        return {}
    },

    created() {
       this.$store.commit('fetchMovies')
       this.$store.commit('fetchGenres')
       this.$store.commit('fecthFakePrices')
    }
}

</script>

<style>

.cardContainer {
    width: 91vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-row-gap: 5vh;
    grid-column-gap: 3vw;
    padding: 12vh 4vw 4vw 4vw;
}

.MovieCard {
    display: flex;
    width: 16vw;
    flex-direction: column;
    justify-content: flex-start;
}

.poster {
    width: 16vw;
    height: 24vw;
    background-color: aliceblue;
    background-position: center;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 101%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.poster ul {
    width: fit-content;
    height: fit-content;
    grid-column: 1/4;
    grid-row: 1/4;
}

.poster li {
  list-style-type: none;
  padding: 5px;
  width: 100px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgba(10,23,55,0.5);
}

.poster button {
    grid-column: 10/10;
    grid-row: 1/1;
    height: 6vh;
    width: 6vh;
    text-decoration: none;
    border: none;
    background-color: rgba(10,23,55,0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.poster img {
    width: 5vh;
    filter: grayscale(1);
    transition: 400ms;
}

.poster img:hover {
    width: 5.5vh;
}

.date {
    grid-column: 1/11;
    grid-row: 10/10;
    background-color: rgba(10,23,55,0.3);
    padding: 3px 0 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.otherInfos {
    background-color: #0F1F2F;
    height: 15vh;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    
}

.avarage, .title {
    width: 85%;
    padding: 0 7.5% 0 7.5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: small;
    text-align: center;
}

.avarage img {
    display: inline-block;
    width: 3.5vh;
}

.otherInfos button {
    height: 5.5vh;
    border: none;
    background-color: #EA5B3B;
    transition: 500ms;
    font-size: large;
}


@media screen and (max-width: 700px) {

   .cardContainer {
    width: 91vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    grid-row-gap: 8vh;
    grid-column-gap: 3vw;
    padding: 3vh 4vw 3vw 4vw;
}

.MovieCard {
    display: flex;
    width: 60vw;
    flex-direction: column;
    justify-content: flex-start;
} 
.poster {
    width: 60vw;
    height: 90vw;
    background-color: aliceblue;
    background-position: center;
    background-repeat: no-repeat;
    background-position: top;
    background-size: 101%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
}

.poster ul {
    width: fit-content;
    height: fit-content;
    grid-column: 1/4;
    grid-row: 1/4;
}

.poster li {
  list-style-type: none;
  padding: 5px;
  width: 100px;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: rgba(10,23,55,0.5);
}

.poster button {
    grid-column: 10/10;
    grid-row: 1/1;
    height: 6vh;
    width: 6vh;
    text-decoration: none;
    border: none;
    background-color: rgba(10,23,55,0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.poster img {
    width: 5vh;
    filter: grayscale(1);
    transition: 400ms;
}

.poster img:hover {
    width: 5.5vh;
}


}

</style>