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

        <button 
        v-bind:class="{favorite: movie.isFavorite}"
        @click.stop.prevent="$store.commit('addToFavorite', movie)">

<svg      
width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5827 6.25C8.8306 6.25 4.16602 10.8667 4.16602 16.5625C4.16602 21.1604 5.98893 32.0729 23.9327 43.1042C24.2541 43.2997 24.6231 43.4032 24.9993 43.4032C25.3756 43.4032 25.7446 
43.2997 26.066 43.1042C44.0098 32.0729 45.8327 21.1604 45.8327 16.5625C45.8327 10.8667 41.1681 6.25 35.416 6.25C29.6639 6.25 24.9993 12.5 24.9993 12.5C24.9993 12.5 20.3348 6.25 14.5827 
6.25Z" stroke="#EA5B3B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>

        </div>

        <div class="infos">

            <div class="title">
                <h3 class="movie ">{{movie.title}}</h3>
            </div>

            <div class="avarage">
                <img src="../assets/star.png" alt="">
                <h3 class="movie">{{movie.vote_average}}</h3>
            </div>

        <div class="buyInfos">
            <h3 class="movie price"> 
                ${{movie.price}}
            </h3>

                <button class="cart" @click.stop.prevent="$store.commit('addToCart', movie)"> 
                 Add   
                </button>

            </div>
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
    border-radius: 20px;
    background-color: #0F1F2F;
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
    border-radius: 20px;
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
    grid-column: 6/7;
    margin-right: 20px;
    height: 9vh;
    width: 6vh;
    text-decoration: none;
    border: none;
    background-color: #0F1F2F;;
    border-radius: 0px 0px 100px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.poster button svg:hover path {
    stroke: #ff8844;
    stroke-width: 1px;
}

.favorite svg:hover path{
    stroke: #ea5b3b !important;
    stroke-width: 3px;
}

.favorite > svg{
    fill: #ea5b3b;
    transition: 400ms;
}


.infos {
    height: 13vh;
    padding: 1.5vh;
    border-radius: 20px;
    display: grid;
    
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

.buyInfos {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.buyInfos button {
    height: 5.5vh;
    width: 55%;
    border-radius: 40px;
    border: none;
    background-color: #EA5B3B;
    transition: 500ms;
    font-size: 20px;
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

.poster img {
    width: 5vh;
    filter: grayscale(1);
    transition: 400ms;
}

.poster img:hover {
    width: 5.5vh;
}

}

@media (orientation: portrait) {
    .MovieCard {
        margin: 8vh 0 -10vh 0;
        height: 66vh;
        width: 72vw;
        padding-bottom: 0.5vh;
    }

    .poster {
    width: 100%;
    height: 50vh;
}
}
</style>