<template>
    <div class="home">
        <P>Home组件</P>
        <br>
        <br>
        <button @click="pubMessage()">发送消息</button>
    </div>
</template>

<script>
    import VueEvent from "../../model/VueEvent";

    export default {
        name: 'Home',
        data() {
            return {
                message: "message from home!"
            }
        },
        methods: {
            pubMessage() {
                VueEvent.$emit("to-news", this.message);
            }
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
