<template>
    <div id="testComponent">
        <div class="title">
            <span>新建用例</span>
            <i class="el-icon-s-tools"></i>
        </div>
        <el-form ref="form" :model="formData">
            <el-form-item label="所属产品" style="font-size:13px; font-weight: bold">
                <el-autocomplete
                    v-model="formData.product"
                    :fetch-suggestions="queryData(1)"
                    @select="selectData(1)"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item>
                <el-select v-model="formData.platForm" placeholder="请选择">
                    <el-option
                        v-for="item in allPlatForm"
                        :key="item.value"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="/" v-model="formData.module">
                    <template slot="prepend">所属模块</template>
                </el-input>
            </el-form-item>
            <el-form-item label="用例类型" style="font-size:13px; font-weight: bold">
                <el-autocomplete
                    v-model="formData.type"
                    :fetch-suggestions="queryData(2)"
                    @select="selectData(2)"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="/" v-model="formData.stage">
                    <template slot="prepend">适应阶段</template>
                </el-input>
            </el-form-item>
            <el-form-item label="相关需求" style="font-size:13px; font-weight: bold">
                <el-autocomplete
                    v-model="formData.demand"
                    :fetch-suggestions="queryData(3)"
                    @select="selectData(3)"
                ></el-autocomplete>
            </el-form-item>
            <el-form-item label="用例标题" style="font-size:13px; font-weight: bold">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="formData.priority">
                    <template slot="prepend">优先级</template>
                </el-input>
            </el-form-item>
            <el-form-item label="前置条件" style="font-size:13px; font-weight: bold">
                <el-input
                    type="textarea"
                    :rows="2"
                    v-model="formData.condition">
                </el-input>
            </el-form-item>
            <el-form-item label="用例步骤" style="font-size:13px; font-weight: bold">
                
            </el-form-item>
            <el-form-item label="关键词" style="font-size:13px; font-weight: bold">
                <el-input v-model="formData.antistop"></el-input>
            </el-form-item>
            <el-form-item label="附件" style="font-size:13px; font-weight: bold">
                <el-upload
                    action=""
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                    style="width: 193px">
                    <el-button size="small" type="primary">添加文件</el-button>
                    <div slot="tip" class="upload_tip">(不超过50MB)</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 110px;margin-left: 441px;">保存</el-button>
                <el-button style="width: 110px;">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

export default {
    name: 'testComponent',
    data() {
        return {
            formData: {
                product: '', // 产品
                platForm: '所有平台', // 平台
                module: '', // 模块
                type: '', // 类型
                stage: '', // 阶段
                demand: '', // 需求
                priority: '', // 优先级
                title: '', // 标题
                condition: '', // 条件
                step: [], // 步骤
                antistop: '', // 关键词
                accessory: '' // 附件
            },
            allPlatForm: [], // 平台数组
            fileList: [] // 文件列表
        }
    },
    methods: {
        /**
         * 查询数据
         */
        queryData: function(type){
            switch(type){
                // 1产品， 2模块， 3需求
            }
        },
        /**
         * 选择数据
         */
        selectData: function(type, item){
            switch(type){
                // 1产品， 2模块， 3需求
            }
        },
        /**
         * 附件移除前
         */
        beforeRemove: function(file, fileList){
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        /**
         * 附件超过限制
         */
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }
    }
}
</script>

<style scoped>
    @import "../../style/pcPage/global.css";
    @import "../../style/pcComponents/testComponent.css";
</style>