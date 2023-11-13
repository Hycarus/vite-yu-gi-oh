<template>
  <main class="container">
    <div class="row">
      <CardComponent :thumb="element.card_images[0].image_url" :title="element.name" :type="element.type" v-for="(element, index) in store.cardList" :key="index"/>
    </div>
  </main>
</template>

<script>
  import CardComponent from './components/CardComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import axios from 'axios';
  import {store} from './data/store.js';
  export default {
    name: 'App',
    components: {
      CardComponent,
      HeaderComponent,
    },
    data(){
      return{
        store,
        
      }
    },
    methods:{
      getCard(){
        axios.get(`${store.apiUrl}`, {params: store.endPoint}).then((response) =>{
          console.log(response.data.data);
          store.cardList = response.data.data;
        })
      }
    },
    created(){
      this.getCard()
    }
  }
</script>

<style lang="scss" scoped>

</style>