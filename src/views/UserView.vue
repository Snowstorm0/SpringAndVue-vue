<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>姓名</td>
            </tr>
            <tr v-for="user in users"  :key="user">
                <td>{{user.number}}</td>
                <td>{{user.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "UserView",
        data(){
            return {
                users:[
                    {
                        number: 1003,
                        name: '张三',
                    },
                    {
                        number: 1004,
                        name: '李四',
                    }
                ]
            }
        },
        created() {
            var that=this;
            axios.get('http://localhost:8081/homepage/view').then(function (resp) {
                that.users=resp.data;
            })
        }
    }
</script>
<style scoped>
</style>