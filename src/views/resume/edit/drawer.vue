<template>
    <div>
        <el-drawer
            title="我是标题"
            class="resume-drawer"
            :with-header="false"
            :visible.sync="visible"
            :direction="direction"
            :before-close="handleClose"
        >
            <div class="edit-box">
                <div class="edit-head">
                    <ul class="edit-tab">
                        <li
                            class="edit-tab-item"
                            :class="{ active: item.active }"
                            v-for="item in tabList"
                            :key="item.name"
                        >
                            <b>{{ item.title }}</b>
                        </li>
                    </ul>
                </div>
                <div class="edit-body">
                    <template v-if="currentTab">
                        <component
                            :key="currentTab.name"
                            :is="currentTab.name"
                            :value="currentTab.formData"
                        >
                        </component>
                    </template>
                </div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import basic from './components/basic'
export default {
    name: 'Drawer',
    components: { basic },
    data() {
        return {
            currentTab: null,
            tabList: [
                {
                    name: 'basic',
                    title: '基本信息',
                    active: true
                },
                {
                    name: 'intention',
                    title: '求职意向',
                    active: false
                },
                {
                    name: 'education',
                    title: '教育背景',
                    active: false
                },
                {
                    name: 'speciality',
                    title: '技能特长',
                    active: false
                },
                {
                    name: 'work',
                    title: '工作经验',
                    active: false
                },
                {
                    name: 'project',
                    title: '项目经验',
                    active: false
                },
                {
                    name: 'me',
                    title: '自我评价',
                    active: false
                }
            ],
            direction: 'btt'
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    // watch: {
    //     currentTab: {
    //         immediate: true,
    //         handler() {
    //             const result = this.tabList.filter(item => item.active);
    //             return result[0];
    //         }
    //     }
    // },
    mounted() {
        const result = this.tabList.filter(item => item.active === true)
        console.log(result)
        this.currentTab = result[0]
    },
    methods: {
        handleTabChange() {},
        handleClose() {}
    }
}
</script>

<style lang="css" scoped>
.resume-drawer >>> .el-drawer {
    height: 300px !important;
}
</style>
<style lang="less" scoped>
li,
ul {
    list-style: none;
}

.edit-box {
    width: 1200px;
    margin: 0 auto;
    .edit-head {
        border-bottom: 2px solid #ddd;
    }
    .edit-body {
    }
    .edit-tab {
        margin: 0;
        padding: 0;
        .flexbox();
        .edit-tab-item {
            position: relative;
            display: block;
            text-align: center;
            padding-top: 22px;
            width: 100px;
            height: 52px;
            position: relative;

            b {
                display: block;
                font-size: 16px;
                cursor: pointer;

                &:hover {
                    color: #f60;
                }
            }
            &.active {
                b {
                    color: #f60;
                }
                &:after {
                    content: ' ';
                    display: block;
                    width: 100%;
                    position: absolute;
                    border-bottom: 2px solid #f60;
                    left: 0;
                    bottom: -2px;
                }
            }
        }
    }
}
</style>
