<template>
  <div class="productlist">
  	<div class="productMain">
  		<div class="popup_main_title"><span>添加保险产品计划</span><div class="popup_main_close" @click="flagChange"></div></div>
  		<div class="productMainMask">
  			<div class="add_plan_select ">
  				<select name="" id="add_plan_select" v-model="productTypeVal" @change="resetOption">
  					<option :value="item.val" v-for="item in productTypeList">{{item.name}}</option>
  				</select>
  			</div>
  			<div v-for="(item,index) in product">
  				<div v-if="productTypeVal==6||item.producttype==productTypeVal"  class="productItem" >
			   		<CInput class="productItemIcon" :flag="productAct[item.productcode]" :code="item.productcode" ></CInput>
			   		<div class="productItemText" @click="checkInput(item.productcode)">{{item.productname}}</div>
		   		</div>
		   	</div>
  		</div>
  		<div class="popup_plan_btn_box"><div class="add_plan_Btn popup_plan_btn" @click="saveProduct">确定</div></div>
  	</div>
   	   <!-- input实时改变value的值, 并且会实时改变child里的内容 -->
  </div>
</template>

<script>
	//msg 錯誤提示
	//productcode 产品拼音缩写
	//productname 产品名
	//producttopic 客户版自动选择主题
	//producttype 产品类型
	//relation 不可组合的产品

import CInput from './CInput.vue'
export default {
  	name: 'productlist',
	props:["vals","flag","code","iAge","aAge","aAgeFlag"],
	components:{
		CInput,
	},
  	data() {
			return {
				insuredAge:this.iAge,
				attackAge:this.aAge,
				informationFlag:this.aAgeFlag,
				productFlag:this.flag,
				productAct:{},
				productActNum:0,
				productTypeVal:6,
				productTypeList:[
					{
						name:"全部计划书",
						val:6
					},
					{
						name:"健康人生",
						val:0
					},
					{
						name:"财富传家",
						val:1
					},
					{
						name:"成长护航",
						val:2
					},
					{
						name:"财富安盈",
						val:3
					},
					{
						name:"品质养老",
						val:4
					},
				],
				product:{
					"CXRS":{
						"insured":["_30","60"],
						"productcode": "CXRS",
						"productname": "醇享人生个人高端医疗保险",
						"producttopic":2,
						"producttype":0,
						"relation":"all",
					},
					"ZZRSB":{
						"insured":["30","55"],
						"productcode": "ZZRSB",
						"productname": "自在人生B款终身年金保险产品计划",
						"producttopic":4,
						"producttype":4,
						"relation":"CXRS,WYBYL",
					}, 
					"ZYEH":{
						"insured":["18","70"],
						"productcode": "ZYEH",
						"productname": "招盈二号（2018）年金保险产品计划",
						"producttopic":3,
						"producttype":4,
						"relation":"CXRS",
					}, 
					"CJDF":{
						"insured":["18","70"],
						"productcode": "CJDF",
						"productname": "传家典范（财富版）终身寿险",
						"producttopic":5,
						"producttype":1,
						"relation":"CXRS,CJDC,CJDCH",
					}, 
					"CJDC":{
						"insured":["18","70"],
						"productcode": "CJDC",
						"productname": "传家典藏终身寿险保险产品计划",
						"producttopic":5,
						"producttype":1,
						"relation":"CXRS,CJDF,CJDCH",
					}, 
					"ZAWLC":{
						"applicant":["20","70"],
						"insured":["_28","13"],
						"productcode": "ZAWLC",
						"productname": "珍爱未来C款少儿教育年金保险产品计划",
						"producttopic":1,
						"producttype":2,
						"relation":"CXRS",
					}, 
					"CJDCH":{
						"insured":["18","70"],
						"productcode": "CJDCH",
						"productname": "传家典承终身寿险保险产品计划",
						"producttopic":5,
						"producttype":1,
						"relation":"CXRS,CJDF,CJDC",
					}, 
					"WYBYL":{
						"insured":["_30","64"],
						"productcode": "WYBYL",
						"productname": "无忧保医疗保险产品计划",
						"producttopic":2,
						"producttype":0,
						"relation":"CXRS,ZZRSB",
					}, 
					"awy":{
						"insured":["18","60"],
						"productcode": "awy",
						"productname": "爱无忧定期寿险产品计划",
						"producttopic":2,
						"producttype":0,
						"relation":"CXRS",
					}, 
					"CJXYX":{
						"insured":["_28","60"],
						"productcode": "CJXYX",
						"productname": "传家玺悦年金保险产品计划",
						"producttype":1,
						"producttopic":5,
						"relation":"CXRS",
					}, 
					"MHRSA":{
						"insured":["_28","60"],
						"productcode": "MHRSA",
						"productname": "美好人生年金保险A款产品计划",
						"producttopic":3,
						"producttype":3,
						"relation":"CXRS",
					}, 
					"ZYJH":{
						"insured":["_28","70"],
						"productcode": "ZYJH",
						"productname": "招盈九号年金保险计划",
						"producttopic":3,
						"producttype":4,
						"relation":"CXRS",
					}, 
					"HRYH":{
						"insured":["_28","75"],
						"productcode": "HRYH",
						"productname": "和瑞一号终身寿险",
						"producttopic":5,
						"producttype":1,
						"relation":"CXRS",
					}, 
					"ZYBYH":{
						"insured":["_28","70"],
						"productcode": "ZYBYH",
						"productname": "招盈宝一号两全保险",
						"producttopic":5,
						"producttype":3,
						"relation":"CXRS",
					}, 
					"ZAWLCC":{
						"insured":["_28","13"],
						"applicant":["20","60"],
						"productcode": "ZAWLCC",
						"productname": "招商信诺珍爱未来少儿教育年金保险",
						"producttopic":4,
						"producttype":2,
						"relation":"CXRS",
					}, 
					"ZZRSBB":{
						"insured":["30","55"],
						"productcode": "ZZRSBB",
						"productname": "招商信诺自在人生B款终身年金保险产品计划",
						"producttopic":3,
						"producttype":0,
						"relation":"CXRS",
					},
					"MHRSAA":{
						"insured":["_28","60"],
						"productcode": "MHRSAA",
						"productname": "招商信诺美好人生年金保险A款产品计划",
						"producttopic":2,
						"producttype":0,
						"relation":"CXRS",
					},
					"AAXKJ":{
						"insured":["_28","50"],
						"productcode": "AAXKJ",
						"productname": "招商信诺爱享康健重大疾病保险",
						"producttopic":2,
						"producttype":0,
						"relation":"CXRS",
					}
				}

			}
	},
	methods:{
		flagChange(){
			this.productFlag=!this.productFlag
			var data={
				val:this.productFlag,
				code:this.code
			}
			this.$emit('changeFlag',data)
		},
		resetOption(){
			this.productAct={};
		},
		checkInput(code){
			/*投保人年龄限制*/
			if(this.productAct[code]==2){
				return;
			}
			if(this.product[code].applicant){
				if(!this.informationFlag||this.attackAge<this.product[code].applicant[0]||attackAge> this.product[code].applicant[1]){
					alert("投保人年龄需满"+this.product[code].applicant[0]+"周岁-"+this.product[code].applicant[1]+"周岁！");
					return;
				}
			}
			/*投保人年龄限制*/
			/*被投保人年龄限制*/
			var min=this.product[code].insured[0];
			var max=this.product[code].insured[1];
			var minAge=this.product[code].insured[0];
			var minAgeText="周岁"
			if(min.indexOf("_")!=-1){
				min=0;
				minAge=minAge.substring(1,minAge.length);
				minAgeText="天"
			}	
			if(this.insuredAge<min||this.insuredAge>max){
				alert("被投保人年龄需满"+minAge+minAgeText+"-"+max+"周岁！");
				return;
			}
			/*被投保人年龄限制*/
			if(this.productAct[code]!=2){
				this.productAct[code]=!this.productAct[code]?1:0;
				if(this.productAct[code]==1){
					this.productActNum++;
				}else{
					this.productActNum--;
				}
				var noText="";
				var unit="";
				var noNum=0;
				for(var i in this.productAct){
					if(this.productAct[i]==1){
						if(noNum!=0){
							unit=","
						}
						noText+=unit+this.product[i].relation
					}
					noNum++
				}
				if(noText==""){
					this.productAct={};
				}else{
					this.productAgeCheck(noText,code);
				}
			}
		},
		productAgeCheck(str,code){
			var productActObj={}
			for(var i in this.product){
				if(code!=i){
					var productAct=0;
					if(this.productActNum==2){
						productAct=2;
					}
					if(this.productAct[i]==1){
						productAct=1;
					}
					if(str=="all"){
						productAct=2;
					}else{
						var arr=str.split(",");
						for(var j=0;j <arr.length;j++){
							if(arr[j]==i){
								productAct=2;
								break;
							}
						}
					}
					productActObj[i]=productAct;
				}else{
					productActObj[code]=this.productAct[code]
				}
			}
			this.productAct=productActObj
		},
		saveProduct(){
			var data={};
			for(var i in this.productAct){
				if(this.productAct[i]==1){
					data[i]=JSON.parse(JSON.stringify(this.product[i]) )
				}

			}
			this.flagChange()
			this.$emit('saveProducts',data)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productlist{
	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    z-index: 5;
}
.productMain{
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 918px;
    background: #f8f8f8;
    padding-top: 90px;
    padding-bottom: 110px;
    box-sizing: border-box;
}
.productMainMask{
	  max-height:718px;
    height: 100%;
    overflow-y: auto;
}
.productItem{
		background: #fff;
    overflow: hidden;
    position: relative;
    border-bottom: 2px solid #e6e6e6;
}
.productItemText {
    color: #4d4d4d;
    font-size: 28px;
    font-weight: 600;
    position: relative;
    padding: 32px 22px 32px 80px;
    z-index: 3;
}
.popup_plan_btn_box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid #e6e6e6;
    padding: 20px;
    height: 110px;
    box-sizing: border-box;
    background: #f8f8f8;
}
.popup_plan_btn {
    width: 100%;
    height: 76px;
    line-height: 76px;
    border: none;
    background: -webkit-linear-gradient(bottom, #1e90ff, #0e72fe);
    color: #fff;
    border-radius: 100px;
    font-size: 28px;
    text-align: center;
}
.popup_main_title {
    height: 90px;
    line-height: 90px;
    background: #fff;
    position: absolute;
    border-bottom: 2px solid #e6e6e6;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
}
.popup_main_title span {
    font-size: 32px;
    font-weight: 600;
    color: #666;
}
.popup_main_close, .popup_main_close_wn {
    right: 20px;
    width: 80px;
    height: 100%;
    background: url(../assets/icon_close.png)no-repeat center;
    background-size: 32px;
    position: absolute;
    top: 0;
}
.productItemIcon{
	position: absolute;
	left: 20px;
	top: 50%;
	margin-top: -16px;
}
.add_plan_select{
	background: #fff;
	border-bottom: 2px solid #e6e6e6;
	padding: 22px;
}
.add_plan_select select{
	width: 100%;
	height: 70px;
	background: #f2f2f2 url(../assets/select_icon.png)no-repeat;
	background-position:95% center ;
	font-size: 30px;
	background-size:33px ;
	font-weight: 600;
	border: none;
	color: #676767;
	padding-left: 30px;
	appearance:none;
	-moz-appearance:none; /* Firefox */
	-webkit-appearance:none; /* Safari 和 Chrome */
}
</style>
