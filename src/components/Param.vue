<template>
  <div>
	  <div class="b_modular_label" v-for="(ditem,index) in plist">
				<div class="b_modular_label_l">
					<span>{{ditem.name}}</span>
				</div> 
				<div class="b_modular_label_r">
				<div class="b_modular_text f_flex" v-if="ditem.type=='text'">
						<input type="text" disabled="disabled" class="z_flex" :value="ditem.val">
				</div>
				<div class="change_linkage_s"  v-if="ditem.type=='list'">
					<Cselect :sList="ditem.val" :code="index" @changeItem="changeItems"></Cselect>
				</div>
						<div class="b_modular_text f_flex" v-if="ditem.type=='number'">
						<input type="text" maxlength="20" :value="ditem.val" class="z_flex premiumInput" @change="premiumChange(ditem.val,$event,index)">
						<span>元</span>
					</div>
				</div> 
		</div>
		<showload v-if="showloadFlag" class="showload" :text="showloadText" :flag="showloadFlag" code="showloadFlag" @changeShow="show"></showload>
  </div>
</template>

<script>
import Cselect from "./Cselect"
import showload from "./showload"
export default {
  props: ["paramList","titleText"],
  data () {
    return {
			plist:this.paramList,
			showloadText:"",
			showloadFlag:false,
    }
  },
  components:{
  	Cselect,
  	showload
  },
  watch: {
   
  },
  mounted(){
  },
 	methods:{
 		show(data){
				var code=data.code;
				this[code]=data.val;
 		},
	  changeItems(data){
			var plist=JSON.parse(JSON.stringify(this.plist))
			plist[data.code].val=data.list;
		  console.log(plist)
	  },
	  premiumChange(val,e,index){

			var val=Number(e.target.value);
			var texts=this.titleText+this.plist[index].name;
			var alertText=""
			if(val>this.plist[index].max){
				alertText=texts+"不能大于"+this.plist[index].max+"元";
			}else if(val<this.plist[index].min){
				alertText=texts+"不能小于"+this.plist[index].min+"元";
			}else if(val%this.plist[index].multiple!=0){
				alertText=texts+"需为"+this.plist[index].multiple+"的整数倍";

			}
			if(alertText!=""){
				this.showloadText=alertText;
				this.showloadFlag=true;
				e.target.value=val;
			}
	  }
  }
}
</script>
<style scoped>
	.b_modular_label {
    overflow: hidden;
    padding: 0 ;
    min-height: 52px;
    line-height: 52px;
    margin-bottom: 28px;
}
.b_modular_label_l {
    float: left;
}
.b_modular_label_r {
    float: right;
    overflow: hidden;
    width: 256px;
}
.b_modular_text {
    border: 2px solid #e1e1e1;
    box-sizing: border-box;
    width: 100%;
    height: 52px;
    padding-left: 8px;
    padding-right: 12px;
}
.b_modular_text input {
    border: none;
    width: 100%;
    background: none;
}
.b_modular_label_r .change_linkage_s {
    height: 52px;
    width: 100%;
    border: 2px solid #e1e1e1;
    padding-left: 8px;
    padding-right: 12px;
    background: #fff;
    box-sizing: border-box;
    position: relative;
}
.b_modular_text span {
    width: 24px;
    font-size: 24px;
    display: block;
    color: #6a6a6a;
    font-weight: 600;
}
.b_modular_label * {
    font-size: 28px;
    color: #323232;
}
.change_linkage_s:after {
    border-right: 8px solid transparent;
    border-top: 8px solid #333;
    border-left: 8px solid transparent;
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -3px;
}
</style>