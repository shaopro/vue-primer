<template>
    <div class="home">


        <p :title="content">Content</p>
        <ol>
            <li v-for="(data,index) in list" :key="index" :class="{red:index===1,blue:index===2}">
                {{index}} ------ {{data}}
            </li>


        </ol>


    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                content: "停留显示",
                list: [
                    {checked: false, content: "1111"},
                    {checked: false, content: "2222"},
                    {checked: false, content: "3333"},
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
<style scoped>
    .red {
        color: red;
    }

    .blue {
        color: blue;
    }
</style>

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
