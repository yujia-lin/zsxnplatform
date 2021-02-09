<template>
	<div class="index">
		<div class="banner"><img src="../assets/banner1.png" alt="" width="100%"></div>
		<div class="b_modular">
			<div class="b_title"><span>被保险人性别</span></div>
			<Choice ctype="sex" code="insuredSex" :vals="insuredSex"  @changeVal="handlechange" ></Choice>
			<div class="b_title"><span>被保险人年龄</span></div>
			<Choice ctype="age" code="insuredAge"  :vals="insuredAge"  @changeVal="handlechange" ></Choice>
			<div class="choice_input_box">
				<input type="checkbox" name="information" id="information_input"  v-model="informationFlag"/> 
				<i></i>
				<span class="ui-fl">投保人信息<b>(非同一人投保时，请填写)</b></span> 
			</div>
			<div class="information_box" v-if="informationFlag">
				<div class="b_title"><span>投保险人性别</span></div>
				<Choice ctype="sex" code="attackSex" :vals="attackSex"  @changeVal="handlechange" ></Choice>
				<div class="b_title"><span>投保险人年龄</span></div>
				<Choice ctype="age" code="attackAge"  :vals="attackAge"  @changeVal="handlechange" ></Choice>
			</div>
		</div>
		<div class="b_modular overh cusMain">
			<div class="b_title">
				<span>险种选择</span><div class="paly_choice" ><input type="checkbox" v-model="productList" class="paly_choiceInput"/>选择产品</div>
			</div>
			<ProductData :plan="pdata" :iAge="insuredAge" :aAge="attackAge" :aAgeFlag="informationFlag" @saveProductData="saveProductData"></ProductData>
		</div>
		<ProductList v-if="productList" :flag="productList" :iAge="insuredAge" :aAge="attackAge" :aAgeFlag="informationFlag"  code="productList" @changeFlag="handlechange" @saveProducts="saveProduct"></ProductList>
		<div class="btn_box">
			<div class="create_btn" @click="golandpage">生成计划书</div>
		</div>
		<showload v-if="showloadFlag" class="showload" :text="showloadText" :flag="showloadFlag" code="showloadFlag" @changeShow="handlechange"></showload>
	</div>
</template>

<script>
	// @ is an alias to /src
import Choice from '@/components/Choice.vue'
import showload from '@/components/showload.vue'
import ProductList from '@/components/ProductList.vue'
import ProductData from '@/components/ProductData.vue'
	export default {
		name: 'Index',
		components: {
    		Choice,
    		ProductList,
    		ProductData,
    		showload
		},
		data() {
			return {
				insuredSex:0,
				insuredAge:18,
				attackSex:0,
				attackAge:18,
				informationFlag:false,
				productList:false,
				pdata:{},
				showloadFlag:false,
				showloadText:"",
				resultData:{},
			}
		},
		methods:{
			handlechange(data){
				var code=data.code;
				this[code]=data.val;
			},
			saveProduct(data){
				this.pdata=JSON.parse(JSON.stringify(data))
			},
			saveProductData(){
				
			},
			golandpage(){
				if(this.productList){
					this.$router.push({path:'Landpage',query:{id:'123'}});
				}else{
					this.showloadText='请先选择产品';
					this.showloadFlag=true;				
				}
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
.create_btn{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: -webkit-linear-gradient(bottom, #1e90ff, #0e72fe);
    color: #fff;
    border: none;
    border-radius: 160px;
    font-size: 32px;
    text-align: center;
}
.btn_box{
	margin: 20px 40px 0;
    padding: 20px 0 0;
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
.paly_choice{
	width: 235px;
	height: 62px;
	box-sizing: border-box;
	border: 2px solid #0082fe;
	border-radius: 6px;
	display: block;
	float: right;
	line-height: 58px;
	color: #0282fd;
	padding-left: 80px;
	position: relative;
	font-size: 28px;
}
.paly_choiceInput{
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
}
.paly_choice:after{
	content: "";
	width: 34px;
	height: 34px;
	background: url(../assets/paly_choice_icon.png)no-repeat;
	background-size:34px;
	position: absolute;
	left: 32px;
	top: 12px;
}

</style>