<template>
  <div class="cinput">
		<div class="cinputIcon" :class="(checkeds==2?'cinputIconNo':(checkeds==1?'cinputIconAct':''))"></div>
  </div>
</template>

<script>
export default {
  name: 'cinput',
  props:{
  	flag:{
  		type:Boolean
  	},
  	code:{
  		type:String
  	}
  },
  data(){
  	return{
  		checkeds:this.flag?1:0,
  	}
  },
  watch:{
  	flag:{
  		handler(newValue,oldValue){
	     this.checkeds=newValue
	    },
	    deep:true //深度监听
  	}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cinput{
	width: 32px;
	height: 32px;
	position: relative;
}
.add_plan_item{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 2;
}
.cinputIcon{
	width: 32px;
	height: 32px;
	background: url(../assets/checkIcon.png)no-repeat center;
	border-radius: 6px;
}
.cinputIconAct {
		background: url(../assets/checkIconAct.png)no-repeat center;
    background-size: 32px;
}
.cinputIconNo{
	background: #ccc;
}
</style>
