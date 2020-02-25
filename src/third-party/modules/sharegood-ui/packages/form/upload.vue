<template>
    <el-form-item :label="label" :prop="name">
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-exceed="handleExceed"
            :show-file-list="false"
            :on-success="handleSuccess"
            :on-error="handleError"
        >
            <el-button size="small" type="primary">点击上传</el-button>
            <slot v-bind:scope="this"></slot>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <el-input class="sg-input" :value="currentValue" style="display:none;">
        </el-input>
    </el-form-item>
</template>

<script>
import formMixins from './form-model'

export default {
    name: 'Upload',
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    mixins: [formMixins],
    data() {
        return {
            currentValue: this.value
        }
    },
    methods: {
        handleSuccess(response, file, fileList) {
            console.log(response)
        },
        handleError(err, file, fileList) {
            console.error(err)
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePreview(file) {
            console.log(file)
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            )
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`)
        }
    }
}
</script>
