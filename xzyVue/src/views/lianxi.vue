<template>
    <div>
        <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="10" :step="1" label="描述文字"></el-input-number>
        <!-- <el-input-number size="mini" v-model="num4"></el-input-number> -->
        <button @click="fn"></button>
        <input-Number/>
    </div>
</template>
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.0/lib/index.js"></script>
<script>
import { Toast } from 'mint-ui'
import { inputNumber } from 'element-ui'
export default {
  methods: {
    data () {
      return {
        num: 1
      }
    },
    fn () {
      Toast('提示信息')
    },
    handleChange (value) {
      console.log(value)
    }
  },
  components: {
    inputNumber
  }
}
</script>
<style scoped>
</style>
