<template>
  <SplashComponent v-if="store.splash"/>
  <div v-else class="wrapper">
    <header class="position-fixed z-1 w-100 d-flex">
      <HeaderComponent/>
      <section class="container d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <input type="number" v-model="store.endPoint.num">
          <button class="btn btn-success mx-3" @click="splashTrue(), getCard()">Search</button>
        </div>
        <SearchbarComponent class="me-5" @filter-change="filterArchetype"/>
      </section>
    </header>
    <main class="container">
      <div class="bg-black text-light p-3 rounded badge mb-2 ">Found {{store.cardList.length}} cards</div>
      <div class="row">
        <CardComponent :thumb="element.card_images[0].image_url" :title="element.name" :type="element.type" v-for="(element, index) in store.cardList" :key="index"/>
      </div>
    </main>
  </div>
</template>

<script>
  import SearchbarComponent from './components/SearchbarComponent.vue'
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
      SearchbarComponent,
    },
    data(){
      return{
        store,
        params: null,
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
      },
      getArchetype(){
        axios.get(store.archetypeUrl)
          .then(function (response) {
            // handle success
            console.log(response.data);
            store.archetypeList = response.data;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      },
      filterArchetype(search){
        if(search){
          this.params = {
            archetype: search
          }
        } else{
          this.params = store.endPoint
        }
        this.getCardFiltered()
      },
      getCardFiltered(){
        axios.get(`${store.apiUrl}`, {params: this.params}).then((response) =>{
          store.cardList = response.data.data;
          store.splash = false
        })
      },
    },
    created(){
      function getArchetype(){
        return axios.get(store.archetypeUrl)
      }
      function getCard(){
        return axios.get(store.apiUrl, {params: store.endPoint})
      }
      Promise.all([getCard(), getArchetype()]).then((results) =>{
        store.cardList = results[0].data.data;
        store.archetypeList = results[1].data;
        store.splash = false
      })
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
main{
  padding-top: 200px;
}
section{
    background-color: rgb(27, 27, 27);
}
</style>