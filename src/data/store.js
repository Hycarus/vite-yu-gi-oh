import {reactive} from 'vue';
export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endPoint: {
        num: 12800,
        offset: 0,
    },
    cardList: [],
    splash: true,
})

