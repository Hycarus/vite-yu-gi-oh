<template>
    <div class="col-3">
        <div class="card my-3 " style="width: 18rem;">
            <img class="w-100" :src="thumb" :alt="title">
            <div class="card-body">
                <h2 class="card-title">{{title}}</h2>
                <h5 class="card-text">{{type}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            thumb: String,
            title: String,
            type: String,
        }
    }
</script>

<style lang="scss" scoped>
.card{
    min-height: 600px;
}
</style>