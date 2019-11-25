<template>
    <div class="header">
        <h2>头部组件 ---- {{title}}</h2>

        <button @click="run('click')">调用父组件</button>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ["title","run"],
        data() {
            return {

            };
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
