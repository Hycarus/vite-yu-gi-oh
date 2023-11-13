<template>
    <div class="col-2">
        <div>
            <img class="w-100" :src="thumb" :alt="title">
        </div>
        <div>
            <h2>{{ title }}</h2>
            <h5>{{ type }}</h5>
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

</style>