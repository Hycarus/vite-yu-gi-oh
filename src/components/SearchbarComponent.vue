<template>
    <div>
        <select class="px-4" name="archetype" id="archetype" v-model="textSearch" @change="$emit('filterChange', textSearch)">
            <option value="">All</option>
            <option v-for="archetype in store.archetypeList" :key="archetype" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<script>
    import {store} from '../data/store.js';
    export default {
        name: 'SearchbarComponent',
        data(){
            return{
                textSearch: '',
                store,
            }
        },
        methods:{
            // passData(){
            //     this.$emit('filterChange', this.textSearch)
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>