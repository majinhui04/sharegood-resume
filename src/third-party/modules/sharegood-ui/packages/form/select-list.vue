<template>
    <el-form-item :label="label" :prop="name">
        <el-select
            v-model="currentValue"
            @input="onInputEvent"
            v-bind="$attrs"
            class="sg-input"
        >
            <el-option
                v-for="(item, index) in optionList"
                :key="index"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script>
import formMixins from './form-model'

export default {
    name: 'SelectList',
    props: {
        value: {
            type: [String, Number, Array],
            default: null
        },
        options: {
            type: [Array, Function],
            default() {
                return []
            }
        }
    },
    mixins: [formMixins],
    data() {
        return {
            optionList: [],
            currentValue: this.value
        }
    },
    mounted() {
        const options = this.options || []
        if (typeof options === 'function') {
            this.options().then(res => {
                this.optionList = res
            })
        } else {
            this.optionList = options
        }
    }
}
</script>
