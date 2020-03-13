<template>
    <div>
        <pageHeader v-bind:title="title"></pageHeader>
        <div class="body">
            <fieldset>
                <legend>单选模式</legend>
                <treeSelect1 v-bind:data="data"></treeSelect1>
            </fieldset>
            <fieldset>
                <legend>多选模式</legend>
                <treeSelect2 v-bind:data="data"></treeSelect2>
            </fieldset>
        </div>
    </div>
</template>

<script>
import pageHeader from '@/components/pageHeader'
import treeSelect1 from '@/components/treeSelect1'
import treeSelect2 from '@/components/treeSelect2'
export default {
    name: 'treeSelect',
    data() {
        return {
            title: 'treeSelect 分类选择',
            data: [{
                title: '浙江',
                id: 0,
                selectable: true,
                array: [{
                    name: '杭州',
                    selectable: true
                },{
                    name: '温州',
                    selectable: true
                },{
                    name: '宁波',
                    selectable: false
                },{
                    name: '义乌',
                    selectable: true
                }]
            },{
                title: '江苏',
                selectable: true,
                array: [{
                    name: '南京',
                    selectable: true
                },{
                    name: '无锡',
                    selectable: true
                },{
                    name: '徐州',
                    selectable: true
                },{
                    name: '苏州',
                    selectable: true
                }]
            },{
                title: '福建',
                selectable: false,
                array: [{
                    name: '福州',
                    selectable: false
                },{
                    name: '宁德',
                    selectable: false
                },{
                    name: '厦门',
                    selectable: false
                }]
            }]
        }
    },
    components: {
        pageHeader, treeSelect1, treeSelect2
    }
}
</script>

<style scoped>
    @import "../../style/mobilePage/global.css";
</style>