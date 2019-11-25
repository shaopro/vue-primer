<template>
    <div class="home">
        <h1>Home 组件</h1>
        <v-header :title="home_title" :run="home_run"></v-header>
    </div>
</template>

<script>

    import Header from "@/components/Header";

    export default {
        name: 'Home',
        components: {
            "v-header": Header
        },
        data() {
            return {
                home_title: "父组件Title",
            }
        },
        methods: {
            home_run(data) {
                window.console.log("parentMethod ---- " + data)
            }
        }
    }
</script>

<!--Add "scoped" attribute to limit CSS to this component only-->
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
