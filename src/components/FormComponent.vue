<template>
    <form>

<div class="fullName">
            <input type="text" id="fullName" required >
            <label for="fullName">Full name</label>
</div>

<div class="CPF">
            <input type="text" id="CPF"  v-mask="['###.###.###-##']" required >
            <label for="CPF">CPF</label>
</div>

<div class="number">
            <input type="tel" id="number" v-mask="['+## (##) #####-####']" required >
            <label for="number">Number</label>
</div>

<div class="email">
            <input type="email" id="email" required >
            <label for="email">E-mail</label>
</div>

<div class="CEP">
            <input type="text" id="CEP"  v-mask="['#####-###']" required >
            <label for="CEP">CEP</label>
</div>

<div class="address">
            <input type="text" id="address" required >
            <label for="address">Adress</label>
</div>

<div class="city">
            <input type="text" id="city" required >
            <label for="city">City</label>
</div>

<div class="state">
            <input type="text" id="state" required >
            <label for="state">State</label>
</div>

    </form>
</template>


<script>
import {mask} from 'vue-the-mask'

export default {
    name: "FormComponent",
     directives: {mask}
}
</script>


<style>
form {
    height: 55vh;
    width: 30vw;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 14vw);
    padding: 2vh 1.5vh;
    grid-row-gap: 1vh;
    grid-column-gap: 2vw;
}

form input {
    outline: none;
    border: none;
    padding: 0.75vh 2vh;
    height: 4.5vh;
    border-radius: 1.2vh;
    font-size: 1.8vh;
}

form div {
    display: flex;
    flex-direction: column-reverse;

}

form div label {
    z-index: 100;
    position: relative;
    top: 4vh;
    left: 2vh;
    color: #ea5b3b;
    transition: 250ms;
    font-size: 1.8vh;
    opacity: 0.7;
    cursor: text;
}

form div input:focus ~ label,
form div input:valid ~ label {
    transform: translateY(-4.3vh);
    opacity: 1;
    cursor: default;
}

.fullName {
    grid-column: 1/3;
    grid-row: 1/1;
}

.CPF {
    grid-column: 1/2;
    grid-row: 2/2; 
}

.number {
    grid-column: 2/3;
    grid-row: 2/2; 
}

.email {
    grid-column: 1/3;
    grid-row: 3/3;
}

.CEP {
    grid-column: 1/1;
    grid-row: 4/4;
}

.adress {
    grid-column: 2/3;
    grid-row: 4/4;
}

.city {
    grid-column: 1/2;
    grid-row: 5/5;
}

.state {
    grid-column: 2/3;
    grid-row: 5/5;
}
</style>