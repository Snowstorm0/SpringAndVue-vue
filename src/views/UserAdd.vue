<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户编号" prop="number">
                <el-input  v-model="ruleForm.number" ></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "UserAdd",
        data() {
            var validateNumber = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户编号'));
                } else {
                    if (this.ruleForm.number !== '') {
                        //如果不为空
                    }
                    callback();
                }
            };
            var validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm.name !== '') {
                        //如果不为空
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    number: '',
                    name: ''
                },
                rules: {
                    number: [
                        { validator: validateNumber, trigger: 'blur' }
                    ],
                    name: [
                        { validator: validateName, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                var that=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //提交成功后要做的事情
                        // alert('submit!');
                        console.log(that.ruleForm)
                        axios.post('http://localhost:8081/homepage/add',that.ruleForm).then(function (response) {
                            console.log(response);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>