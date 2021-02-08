<template>
  <div class="LYselect">
			<div v-for="item in selectList">
				<div v-if="item.checked==true" class="selectText">{{item.name}}<input type="checkbox" v-model="selectFlag" class="selectInput"/> </div>
			</div>
			<div class="lin_select_mask" v-if="selectFlag">
		    <div class="lin_select_main">
		        <div class="lin_select_listMask">
			        <div class="lin_select_list">
								<div v-for="item in selectList" class="lin_select_Item" @click="changeOption(item.code)">{{item.name}}</div>
			        </div>
		        </div>
		        <span class="lin_select_close">取消<input type="checkbox" v-model="selectFlag" class="selectInput"/></span>
		    </div>
			</div>
  </div>
</template>

<script>
export default {
  name: 'cinput',
	props:["sList","code"],
  data(){
  	return{
			selectList:this.sList,
			selectFlag:false,
  	}
  },
  watch:{
  
  },
  methods:{
	  changeOption(code){
	  	var list=JSON.parse(JSON.stringify(this.selectList))
	  	for(var i in list){
	  		var checked=false;
	  		if(code==list[i].code){
	  			checked=true;
	  		}
	  		list[i].checked=checked;
	  	}
	  	this.selectList=list
	  	this.selectFlag=false;
	  	var code=0;
	  	if(this.code){
	  		code=this.code;
	  	}
	  	var data={
	  		list:list,
	  		code:code
	  	}
//	  	this.$emit("changeItem",data);
			this.$emit('changeItem',data)
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lin_select_listMask{
	max-height:900px;
	overflow: auto;
	border-radius: 10px;
}
.lin_select_mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 10;
}
.lin_select_main{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding:10px;
}
.lin_select_main .lin_select_Item{
    font-size: 32px;
    display: block;
    background:#FFF;
    height: 85px;
    line-height: 85px;
    text-align: center;
    color: #282828;
}
.lin_select_list {

    overflow: hidden;
}
.lin_select_list .lin_select_Item{
    border-bottom: 2px solid #ccc
}
.lin_select_list .lin_select_Item:last-child{
    border-bottom: none;
}
.lin_select_main .lin_select_close{
    border-radius: 20px;
    margin-top: 15px;
    position: relative;
    font-size: 32px;
    display: block;
    background:#FFF;
    height: 85px;
    line-height: 85px;
    text-align: center;
    color: #282828;
}
.selectInput{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
}
.selectText{
	position: relative;
}
</style>
