<template>
    <div class="col-2">
        <div class="card mb-3">
            <div><img class="w-100" :src="thumb" :alt="title"></div>
            <div class="card-body bg-danger">
                <h4 class="">{{title}}</h4>
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
.card-body{
    min-height: 180px;
}
</style>