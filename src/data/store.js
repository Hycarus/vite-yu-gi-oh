import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endPoint: {
        num: 20,
        offset: 0,
    },
    cardList: [],
    splash: true,
    archetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: [],
})

