<template>
    <div>
    用户列表
        <el-table
                :data="tableData"
                border
                style="width: 40%">
            <el-table-column
                    prop="number"
                    label="编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="160">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                page-size="2"
                @current-change="page">
        </el-pagination>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "HomePage",
        methods: {
            handleClick(row) {
                this.$router.push({
                    path: '/useredit',
                    query:{
                        number: row.number,
                        name: row.name
                    }
                })
            },
            deleteClick(row){
                // var that=this;
                axios.delete('http://localhost:8081/homepage/delete/'+row.number).then(function (response) {
                    console.log(response)
                })
            },
            //当被点击页数的时候，跳转
            page(currPage){
                var that=this;
                axios.get('http://localhost:8081/homepage/query/'+(currPage-1)*3+'/3').then(function (response) {
                    that.tableData=response.data;
                })
            }
        },
        //被创建的时候，显示第一页
        created() {
            var that=this;
            axios.get('http://localhost:8081/homepage/query/0/3').then(function (response) {
                //给数据
                that.tableData=response.data;
                // console.log(response.data)
            }),
                axios.get('http://localhost:8081/homepage/all').then(function (response) {
                    //获得总长度
                    that.total=response.data.length ;
                })
        },
        data() {
            return {
                total: 10,
                tableData: [{
                    number: '编号',
                    name: '姓名'
                }]
            }
        }
    }
</script>

<style scoped>

</style>