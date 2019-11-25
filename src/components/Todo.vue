<template>
    <div class="home">
        <P>Todo组件</P>
        <br>
        <label>
            <input type="text" v-model="content">
        </label>
        <button @click="add()">新增</button>
        <br>
        <hr>

        <p>正在进行</p>
        <ul v-for="(one,index) in list" :key="index">
            <li v-if="!one.checked">
                <input type="checkbox" v-model="one.checked">
                {{one.content}}
                <button @click="remove(index)">删除</button>
            </li>
        </ul>
        <hr>

        <p>已经完成</p>
        <ul v-for="(one,index) in list" :key="index">
            <li v-if="one.checked">
                <input type="checkbox" v-model="one.checked">
                {{one.content}}
                <button @click="remove(index)">删除</button>
            </li>
        </ul>


    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                content: "",
                list: [
                    {checked: false, content: "1111"},
                    {checked: false, content: "2222"},
                ]
            }
        },
        methods: {
            add() {
                this.list.push({checked: false, content: this.content});
                this.content = "";
            },
            remove(index) {
                this.list.splice(index, 1);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--    h3 {-->
<!--        margin: 40px 0 0;-->
<!--    }-->

<!--    ul {-->
<!--        list-style-type: none;-->
<!--        padding: 0;-->
<!--    }-->

<!--    li {-->
<!--        display: inline-block;-->
<!--        margin: 0 10px;-->
<!--    }-->

<!--    a {-->
<!--        color: #42b983;-->
<!--    }-->
<!--</style>-->
