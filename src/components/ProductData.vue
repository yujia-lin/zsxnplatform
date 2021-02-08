<template>
  <div class="productData">
  	<div class="popup_plan_box" v-for="item in productData">
	  	<div class="popup_plan_title f_flex">
		  	<div class="planShowText z_flex">{{item.productname}}</div> 
		  	<div class="b_m_checkbox planShowicon ui-fr">
			  	<div class="popup_plan_share "></div>
		  	</div>
  		</div>
  		
  		<div class="popup_planMain_risk">
  			<!--主险-->
  			<Param :paramList="details[item.productcode].Main" :titleText="item.productname"></Param>
  	
  		</div>
  		<div class="additional_risk">
  			<!--附加险-->
  			
  		</div>
  	</div>
  </div>
</template>

<script>

import CInput from './CInput.vue'
import Param from './Param.vue'
export default {
  name: 'productlist',
	props:["vals","plan","code","iAge","aAge","aAgeFlag"],
	components:{
		CInput,
		Param,
	},
	watch:{
		plan:{
  		handler(newValue,oldValue){
	     this.productData=newValue
	    },
	    deep:true //深度监听
  	}
	},
  data() {
		return {
			insuredAge:this.iAge,
			attackAge:this.aAge,
			informationFlag:this.aAgeFlag,
			productData:this.plan,
			details:{
				"AAXKJ":{
					Main:[
						{
							code: "payment_method",
							name: "交费方式",
							type:"text",
							val:"年交"
						},
						{
							code: "duration_period",
							name: "交费期间",
							type:"list",
							val:[
								{
									code:10,
									name:"10年",
									checked:true,
									min:0,
									max:55,
								},
								{
									code:15,
									name:"15年",
									checked:false,
									min:0,
									max:50,
								},
								{
									code:20,
									name:"20年",
									checked:false,
									min:0,
									max:45,
								}
							]
						},
						{
							code: "insurance_period",
							name: "保险期间",
							type:"text",
							val:"保终身"
						},
						{
							code: "premium",
							name: "保额/保费",
							type:"number",
							multiple:10000,
							min:10000,
							val:20000
						}
					]
					
				}
			}
		}
	},
	methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup_plan_box{
	padding-top: 20px;
}
.popup_plan_title {
    font-weight: 600;
    font-size: 32px;
    line-height: 60px;
    margin-bottom: 20px;
    position: relative;
}
.planShowText {
    font-weight: 600;
    font-size: 29px;
    line-height: 60px;
    height: 60px;
    overflow: hidden;
}
.popup_plan_share {
    width: 56px;
    height: 56px;
    background: url(../assets/popup_plan_share.png) no-repeat center;
    background-size: 56px;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 0;
}

</style>
