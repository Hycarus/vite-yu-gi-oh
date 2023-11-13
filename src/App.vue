<template>
  <SplashComponent v-if="store.splash"/>
  <div v-else class="wrapper">
    <header>
      <HeaderComponent/>
    </header>
    <section class="container">
      <input type="number" placeholder="Type how many cards you want to see" v-model="store.endPoint.num">
      <button class="btn btn-success" @click="splashTrue(), getCard()">Search</button>
    </section>
    <main class="container">
      <div class="bg-black text-light p-3 rounded badge mb-2 ">Found {{store.cardList.length}} cards</div>
      <div class="row">
        <CardComponent :thumb="element.card_images[0].image_url" :title="element.name" :type="element.type" v-for="(element, index) in store.cardList" :key="index"/>
      </div>
    </main>
  </div>
</template>

<script>
  import SplashComponent from './components/SplashComponent.vue';
  import CardComponent from './components/CardComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import axios from 'axios';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components: {
      CardComponent,
      HeaderComponent,
      SplashComponent,
    },
    data(){
      return{
        store,
        
      }
    },
    methods:{
      getCard(){
        axios.get(`${store.apiUrl}`, {params: store.endPoint}).then((response) =>{
          store.cardList = response.data.data;
          store.splash = false
        })
      },
      splashTrue(){
        store.splash = true
      }
    },
    created(){
      this.getCard()
    }
  }
</script>

<style lang="scss" scoped>
.wrapper{
  background-image: url(./assets/images/background.jpeg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>