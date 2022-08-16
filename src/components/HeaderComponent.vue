<template>
    <header>
        <h1><router-link to="/">Filmêra</router-link></h1>

        <div class="icons">

            <button class="favoriteList"  @click.stop.prevent = "this.$store.commit('toggleFavoriteBar')">

        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5827 6.25C8.8306 6.25 4.16602 10.8667 4.16602 16.5625C4.16602 21.1604 5.98893 32.0729 23.9327 43.1042C24.2541 43.2997 24.6231 43.4032 24.9993 43.4032C25.3756 43.4032 25.7446 43.2997 26.066 43.1042C44.0098 32.0729 45.8327 21.1604 45.8327 16.5625C45.8327 10.8667 41.1681 6.25 35.416 6.25C29.6639 6.25 24.9993 12.5 24.9993 12.5C24.9993 12.5 20.3348 6.25 14.5827 6.25Z" 
            stroke="#EA5B3B" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

            </button>


            <button class="cartList" @click.stop.prevent = "this.$store.commit('toggleCartBar')">

        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.416 14.5835H39.1452C39.7273 14.5835 40.303 14.7055 40.8351 14.9416C41.3671 15.1777 41.8439 15.5227 42.2345 15.9544C42.6251 16.386 42.9209 16.8947 43.1029 17.4476C43.2848 18.0006 43.3489 18.5855 43.291 19.1647L42.041 31.6647C41.9382 32.6929 41.457 33.6461 40.6909 34.3395C39.9248 35.0328 38.9284 35.4168 37.8952 35.4168H17.9993C17.0357 35.4172 16.1018 35.0836 15.3565 34.4728C14.6112 33.862 14.1007 33.0117 13.9118 32.0668L10.416 14.5835Z" stroke="#EA5B3B" stroke-width="4.16667" stroke-linejoin="round"/>
            <path d="M10.416 14.5833L8.72852 7.82708C8.61566 7.37657 8.3555 6.97668 7.98936 6.69095C7.62323 6.40521 7.17212 6.25001 6.70768 6.25H4.16602M16.666 43.75H20.8327M33.3327 43.75H37.4993" stroke="#EA5B3B" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

            </button>

        </div>
    </header>
</template>


<script>

export default {
    name: "HeaderComponent",
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');

header {
    width: 95vw;
    height: 6vh;
    position: fixed;
    z-index: 100;
    padding: 1vh 2.5vw 1vh 2.5vw;
    background-color: #0C0717;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icons {
    width: 20%;
    height: 100%;
    display: flex;
    gap: 2vw;
    justify-content: flex-end;
    align-items: center;
}

.icons button {
    border: none;
    background: none;
    height: 4vh;
    width: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: shake 0.4s  alternate;
}

.icons button svg {
    width: 4vh;
    transition: fill .4s ease;
}

.icons button:hover > svg path{
    fill: #EA5B3B;
        transition: fill .4s ease;

}

h1 {
font-family: 'Baloo 2', cursive;
font-size: 6vh;
}

header a {
    text-decoration: none;
    color: #FF6F40;
}

.sidebar {
      animation: appear 200ms  linear;
}

.icons button:checked > svg path{
fill: #EA5B3B
}

@keyframes appear {
    0% {
        margin-right: -30vw;
    }
    50% {
        margin-right: -15vw;
    }
    100% {
        margin-right: 0;
    }
}

@keyframes shake {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-45deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(45deg);
    }
    100% {
        transform: rotate(0deg);
    }

}


@media screen and (max-width: 700px) {
    @keyframes appear {
    0% {
        margin-right: -70vw;
    }
    50% {
        margin-right: -35vw;
    }
    100% {
        margin-right: 0;
    }
}

}
</style>