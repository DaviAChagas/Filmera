<template>
  <div class="purchaseContainer">
    <FormComponent />
    <CartComponent />
</div>
</template>

<script>
import CartComponent from '../components/CartComponent.vue'
import FormComponent from '../components/FormComponent.vue'

export default {
  name: 'PurchaseView',
  components: {
    FormComponent,
    CartComponent,
}
}
</script>

<style>
.purchaseContainer {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media (orientation: portrait) {
  .purchaseContainer {
    height: 165vh;
    justify-content: space-evenly;
    flex-direction: column;
  }


  form, .cartComponent {
    width: 80vw;
  }

  .cartComponent {
    height: 70vh;
  }

  .itemsCartList {
    display: flex;
    flex-direction: column;
    height: 55vh;
    padding: 2.5vh 0;
}

  form {
    height: 70vh;
    grid-template-rows: repeat(5, 12vh);
    grid-template-columns: repeat(2, 38vw);
    grid-column-gap: 4vw;
  }
  
  form input {
    padding: 0.75vh 2vh;
  }
}
</style>