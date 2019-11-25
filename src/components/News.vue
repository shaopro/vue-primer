<template>
    <div class="news">
        <p>News组件</p>
    </div>
</template>

<script>
    import VueEvent from "../../model/VueEvent";

    export default {
        name: 'News',
        mounted() {
            VueEvent.$on("to-news", data => window.console.log(data));
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
