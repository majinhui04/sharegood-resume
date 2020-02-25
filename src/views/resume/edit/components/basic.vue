<template>
    <div class="basic-box">
        <sg-form
            :inline="true"
            v-model="queryInfo.data"
            :field-list="queryInfo.fieldList"
            :label-width="queryInfo.labelWidth"
            @submit="save"
        >
        </sg-form>
    </div>
</template>
<script>
export default {
    methods: {
        save() {
            console.log(this.queryInfo.data)
        }
    },
    data() {
        return {
            // 查询
            queryInfo: {
                labelWidth: '80px',
                data: {
                    marriage: '不填'
                },
                fieldList: [
                    {
                        width: '25%',
                        name: 'realname',
                        label: '您的姓名',
                        fieldType: 'input',
                        placeholder: '输入您的姓名'
                    },
                    {
                        width: '25%',
                        name: 'birthday',
                        label: '出生年月',
                        fieldType: 'date',
                        type: 'month',
                        'default-value': '1991/01/01'
                    },
                    {
                        width: '25%',
                        name: 'phone',
                        label: '联系电话',
                        fieldType: 'input',
                        placeholder: '输入联系电话'
                    },
                    {
                        width: '25%',
                        name: 'email',
                        label: '联系邮箱',
                        fieldType: 'input',
                        placeholder: '输入联系邮箱'
                    },
                    {
                        width: '25%',
                        name: 'years',
                        label: '工作年限',
                        fieldType: 'select',
                        placeholder: '请选择工作年限',
                        options() {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve([
                                        {
                                            label: '不填',
                                            value: '不填'
                                        },
                                        {
                                            label: '应届生',
                                            value: '应届生'
                                        },
                                        {
                                            label: '半年经验',
                                            value: '半年经验'
                                        },
                                        {
                                            label: '1年经验',
                                            value: '1年经验'
                                        },
                                        {
                                            label: '2年经验',
                                            value: '2年经验'
                                        },
                                        {
                                            label: '3年经验',
                                            value: '3年经验'
                                        },
                                        {
                                            label: '4年经验',
                                            value: '4年经验'
                                        },
                                        {
                                            label: '5年经验',
                                            value: '5年经验'
                                        },
                                        {
                                            label: '6年经验',
                                            value: '6年经验'
                                        },
                                        {
                                            label: '7年经验',
                                            value: '7年经验'
                                        },
                                        {
                                            label: '8年经验',
                                            value: '8年经验'
                                        },
                                        {
                                            label: '9年经验',
                                            value: '9年经验'
                                        },
                                        {
                                            label: '10年经验',
                                            value: '10年经验'
                                        },
                                        {
                                            label: '10年经验以上',
                                            value: '10年经验以上'
                                        }
                                    ])
                                }, 2000)
                            })
                        }
                    },
                    {
                        width: '25%',
                        name: 'photo',
                        label: '照片设置',
                        fieldType: 'upload'
                    },
                    {
                        width: '25%',
                        name: 'sex',
                        label: '性别',
                        fieldType: 'select',
                        placeholder: '请选择性别',
                        options: [
                            {
                                label: '不填',
                                value: '不填'
                            },
                            {
                                label: '男',
                                value: '男'
                            },
                            {
                                label: '女',
                                value: '女'
                            }
                        ]
                    },
                    {
                        width: '25%',
                        name: 'marriage',
                        label: '婚姻状况',
                        fieldType: 'select',
                        options: [
                            {
                                label: '不填',
                                value: '不填'
                            },
                            {
                                label: '已婚',
                                value: '已婚'
                            },
                            {
                                label: '未婚',
                                value: '未婚'
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.basic-box {
    height: 600px;
    overflow-y: auto;
    padding: 15px 0;
}
</style>
