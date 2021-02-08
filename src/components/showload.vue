<template>
  <div class="showload">
		<div class="showtext" :class="!checkeds?'showtextNo':''">{{texts}}</div>
  </div>
</template>

<script>
export default {
  name: 'cinput',
  props:["flag","text","time","code"],
  data(){
  	return{
  		texts:this.text,
  		checkeds:this.flag,
  		timeout:this.time||2000
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
  mounted(){
  	var _this=this
  	var times=Number(this.timeout)-500;
  	console.log(times)
  	setTimeout(function(){
  		_this.checkeds=false;
  	
  	},times)
  	setTimeout(function(){
  		var data={
				val:_this.checkeds,
				code:_this.code
			}
			_this.$emit('changeShow',data)
  	},_this.timeout)
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showload{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	text-align: center;
	z-index: 100;
	display: flex;
	justify-content:center;
	align-items:center ;
}
.showtext{
	color: #fff;
	background: rgba(0,0,0,.5);
	overflow: hidden;
	text-align: center;
	padding: 20px 30px;
	line-height: 40px;
	max-width: 80%;
	font-size: 28px;
	box-sizing: border-box;
	transition: all .5s;
	opacity: 1;
}

.showtextNo{
	opacity: 0;
}
</style>
