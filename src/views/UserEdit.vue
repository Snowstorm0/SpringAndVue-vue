<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="编号" prop="number">
                <el-input  v-model="ruleForm.number" ></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: "EditBook",
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
                    callback(new Error('请输入用户姓名'));
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
                        axios.put('http://localhost:8081/book/edit/',that.ruleForm).then(function (response) {
                            console.log(response);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }

        },
        created() {
            this.ruleForm.id=this.$route.query.id;
            this.ruleForm.name=this.$route.query.name;
            this.ruleForm.author=this.$route.query.author;
        }
    }
</script>