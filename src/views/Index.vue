<template>
	<div class="index">
		<div class="banner"><img src="../assets/banner1.png" alt="" width="100%"></div>
		<div class="b_modular">
			<div class="b_title"><span>被保险人性别</span></div>
			<choice ctype="sex" code="insuredSex" :vals="insuredSex"  @changeVal="handlechange" ></choice>
			<div class="b_title"><span>被保险人年龄</span></div>
			<choice ctype="age" code="insuredAge"  :vals="insuredAge"  @changeVal="handlechange" ></choice>
			<div class="choice_input_box">
				<input type="checkbox" name="information" id="information_input"  v-model="informationFlag"/> 
				<i></i>
				<span class="ui-fl">投保人信息<b>(非同一人投保时，请填写)</b></span> 
			</div>
			<div class="information_box" v-if="informationFlag">
				<div class="b_title"><span>投保险人性别</span></div>
				<choice ctype="sex" code="attackSex" :vals="attackSex"  @changeVal="handlechange" ></choice>
				<div class="b_title"><span>投保险人年龄</span></div>
				<choice ctype="age" code="attackAge"  :vals="attackAge"  @changeVal="handlechange" ></choice>
			</div>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
import choice from '@/components/choice.vue'
	export default {
		name: 'Index',
		components: {
    		choice,
		},
		data() {
			return {
				insuredSex:0,
				insuredAge:18,
				attackSex:0,
				attackAge:18,
				informationFlag:false,
			}
		},
		methods:{
			handlechange:function(data){
				var code=data.code;
				this[code]=data.val;
			}
		}
	}
</script>
<style type="text/css">
.b_modular {
	margin: 20px 30px 0;
	background: #fff;
	border-radius: 10px;
}
	
.banner img {
	width: 100%;
}

.b_title:before {
	content: "";
	display: block;
	width: 16px;
	height: 32px;
	position: absolute;
	left: 0;
	top: 50%;
	margin-top: -16px;
	background: #0183ff;
	border-radius: 10px;
}
	
.b_title {
		position: relative;
		padding: 26px 30px;
	}
	
.b_title span {
		font-size: 36px;
		font-weight: 600;
		color: #0081ff;
		line-height: 52px;
	}
.choice_input_box span{
	font-size: 32px;
	font-weight: 600;
	color: #666;
}

.choice_input_box span b{
	font-size: 32px;
	color: #666;
	font-weight: 400;
	margin-left: 16px;
}
.choice_input_box{
	display: block;
	height: 52px;
	line-height: 52px;
	position: relative;
	overflow: hidden;
	padding-top: 20px;
}

.choice_input_box i{
	width: 36px;
	height: 36px;
	box-sizing: border-box;
	display: block;
	margin-top: 10px;
	margin-right: 10px;
	float: left;
	border-radius:50%;
	border: 2px solid #bebebe;
	background: #fff;
}
.choice_input_box input{
	opacity: 0;
	
	position: absolute;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.choice_input_box input:checked+i{
	background:  url(../assets/radioIconAct.png)no-repeat center;
	background-size: 36px;
	border: none;
}
</style>