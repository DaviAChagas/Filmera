<template>

<div class="sidebar cart" v-show="$store.state.isCartOpen">
<div class="titileAndClean">
    <div class="cartTitle">
        Meu Carrinho
    </div>

    <span class="cleanList" @click.stop.prevent="$store.commit('cleanCartList')">
        Esvaziar
    </span>
</div>

<div class="displayCartList">
  <tr v-for = "movie in $store.state.cartList"
        v-bind:key = "movie.id">

    <td class="titleTD">
        <p>{{movie.title}}</p>
    </td>

    <td class="priceTD">
        {{movie.price}}
    </td>

    <td class="quantityTD">
        {{movie.quantity}}
    </td>

    <td class="trashTD">        
        <span class="trash"  @click.stop.prevent="$store.commit('deleteCartItem', movie)">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 12.4998H45.8327M20.8327 22.9165V33.3332M29.166 22.9165V33.3332M8.33268 12.4998H41.666L38.3743 42.1248C38.2615 43.1444 37.7766 44.0865 37.0124 44.7707C36.2482 45.4549 35.2584 45.8332 34.2327 45.8332H15.766C14.7403 45.8332 13.7505 45.4549 12.9863 44.7707C12.2221 44.0865 11.7372 43.1444 11.6243 42.1248L8.33268 12.4998ZM15.3014 6.55609C15.6384 5.84144 16.1717 5.23733 16.8389 4.81424C17.5062 4.39114 18.2801 4.16649 19.0702 4.1665H30.9285C31.719 4.1661 32.4933 4.39056 33.161 4.81368C33.8287 5.2368 34.3622 5.84112 34.6993 6.55609L37.4993 12.4998H12.4993L15.3014 6.55609V6.55609Z" stroke="#FAFAFA" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </td>
  </tr>
</div>    

<div class="buyInfos">

    <h3 class="price"> 
        Amount: ${{$store.state.amount}}
    </h3>

    <button @click.stop.prevent = "this.$store.commit('toggleCartBar')" class="cartButton">
        <router-link to="/purchase" active-class="active" :style="'text-decoration: none;'">
            Finalize purchase
        </router-link>
    </button>
</div>

</div>

</template>


<script>
export default {
    name: "CartSideBar",
}
</script>


<style>
.cleanList {
    color: #EA5B3B;
    text-decoration: underline;
}

.displayCartList {
    display: flex;
    flex-direction: column;
    gap: 1vh;
    height: 70vh;
    padding: 5vh 2vh;
    overflow-y: scroll;
}


.displayCartList::-webkit-scrollbar {
  width: 8px;               
}

.displayCartList::-webkit-scrollbar-track {
  background: #040208;        
}

.displayCartList::-webkit-scrollbar-thumb {
  background-color: #ff6f40;   
  border-radius: 10px;       
}

tr {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

td {
    display: flex;
    justify-content: center;
    align-items: center;
}

.titleTD {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.priceTD {
    grid-column: 3/3;
}

.quantityTD {
    grid-column: 4/4;
}

.trashTD {
    grid-column: 5/5;
}

.titileAndClean {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    font-size: 2vh;
}

.cartTitle {
    color: #FAFAFA;
    font-size: 2.5vh;
}

.sidebar tr{
    color: #FAFAFA;
      font-size: 2vh;
}

td svg {
    width: 3vh;
}

.sidebar svg:hover path{
    stroke: #EA5B3B;
    transition: 200ms;
}

.sidebar span {
    cursor: pointer;
}

.cartButton {
    height: 5vh;
    border: none;
    background-color: #EA5B3B;
    transition: 500ms;
    font-size: large;
}

.cartButton:hover{
    background-color: #ff6f40;
}
</style>