<template>
    <div id="app">
        <v-home></v-home>
        <v-news></v-news>
    </div>
</template>

<script>
    import Home from './components/Home.vue'
    import News from './components/News.vue'
    export default {
        name: 'app',
        components: {
            "v-home": Home,
            "v-news": News
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
