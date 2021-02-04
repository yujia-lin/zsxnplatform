<!-- children.vue -->
<template>

    <input type="text" name="" id="" v-model="vals" @input="handleChange" />
</template>
<script>

export default{
    
    data() {
			return {
				vals:1,
				
			}
		},
    mounted(){
    	
    //这里模拟异步将msg传到父组件v-model，实现双向控制
//      setTimeout(_=>{
//          let some = '3秒后出现的某个值';//子组件自己的某个值
//          this.$emit('update:msg',some);
//          //将这个值通过 emit 触发parent-event，将some传递给父组件的v-model绑定的变量
//      },3000);
    },
    methods:{
			handleChange(event){

				this.$emit('change',event);
			}
						
		}
}
</script>
