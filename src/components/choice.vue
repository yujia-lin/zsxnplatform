<template>
  <div class="choice">
   		<div class="sexRadioBox f_flex" v-if="ctype=='sex'">
			
				<label class=" z_flex" v-for="item in sexList" @change="handleChange(item.val)">
					<div class="sexRadioItem">
						<input type="radio" name="sex" class="sex_radio" :value="item.val" v-model="parentVal"> 
						<div class="sexRadioItemImg " :class="'sexRadioItemImg'+item.val"></div>
					</div>
				</label>
				
			</div>
			<div class="rangeAgeBox" v-if="ctype=='age'">
							<img src="../assets/rangeAgeIcon1.png" class="rangeAgeImg1"/>
							<img src="../assets/rangeAgeIcon2.png" class="rangeAgeImg2"/>
							<div class="rangeAgeText">
								<input class="rangeAgeInput" type="tel" maxlength="2" v-model="parentVal" @input="handleChange(parentVal)" oninput="var v=this.value||'';v=v.replace(/[^\d]/g,'');this.value=v.substr(0,2);"/>
								<div class="rangeAgeSpan">岁</div>
							</div>
							<div class="rangeParent">
								<input  class="progress processRange" type="range"  @change="handleChange(parentVal)" v-model="parentVal" :style="{background: '-webkit-linear-gradient(left, rgb(0,129,255) 0%,rgb(0,129,255) '+ parentVal*100/duration +'%,rgb(238,238,238) '+ (parentVal*100/duration+0.00001) +'%,rgb(238,238,238) 100%)'}" :max ="duration" min ="0" step="1"  style="background-color:#fff;width: 100%;margin-bottom:3px;" >
								<!--<input  class="progress processRange" type="range" :value="parentVal" v-model="parentVal" :max ="duration" min ="0" step="1"  style="background-color:#fff;width: 100%;margin-bottom:3px;" :style="{background: '-webkit-linear-gradient(left, rgb(0,129,255) 0%,rgb(0,129,255) '+ parentVal*100/duration +'%,rgb(238,238,238) '+ (parentVal*100/duration+0.00001) +'%,rgb(238,238,238) 100%)'}">-->
							</div>
			</div>
   		
  </div>
</template>

<script>
export default {
  name: 'choice',
	props:["vals","ctype","code"],
  data() {
			return {
				parentVal:this.vals,

				duration:75,
				sexList:[
					{
						val:0
					},
					{
						val:1
					},
				],
			}
	},
	methods:{
		handleChange(val){
			var data={
				val:val,
				code:this.code
			}
			this.$emit('changeVal',data)
		}
					
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sexRadioItem {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 140px;
    position: relative;
}
.sexRadioItem .sex_radio {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.sexRadioItem .sexRadioItemImg {
    width: 140px;
    height: 140px;
    background-repeat: no-repeat;
    background-size: 140px;
    background-image: url(../assets/sex_radio1.png);
}
.sexRadioItem input:checked +.sexRadioItemImg {
    background-image: url(../assets/sex_radio1Act.png);
}
.sexRadioItem .sexRadioItemImg1 {
    background-image: url(../assets/sex_radio2.png);
}
.sexRadioItem input:checked + .sexRadioItemImg1 {
    background-image: url(../assets/sex_radio2Act.png);
}

.rangeAgeBox {
    position: relative;
    height: 80px;
    width: 100%;
    padding: 0 240px 0 66px;
    box-sizing: border-box;
    padding-top: 24px;
}
.rangeAgeImg1 {
    width: 78px;
    height: 67px;
    position: absolute;
    left: 0;
    top: -4px;
}
.rangeAgeImg2 {
    width: 78px;
    height: 51px;
    position: absolute;
    right: 178px;
    top: 14.5px;
}
.rangeAgeText {
    position: absolute;
    width: 160px;
    height: 51px;
    line-height: 51px;
    border-radius: 10px;
    right: 0;
    top: 14.5px;
    border: 2px solid #dcdcdc;
    text-align: center;
    color: #666;
    font-size: 30px;
}
.rangeAgeInput {
    width: 50%;
    text-align: right;
    display: block;
    border: none;
    background: none;
    height: 100%;
    float: left;
    font-size: 30px;
    height: 50px;
    line-height: 51px;
}
.rangeAgeSpan {
    display: block;
    width: 50%;
    text-align: left;
    height: 100%;
    float: left;
    font-size: 28px;
    height: 51px;
    line-height: 51px;
}
.processRange {
    -webkit-appearance: none;
    height: 30px;
    z-index: 10;
}
.processRange:focus{
	outline: none;
}
.processRange::-webkit-slider-runnable-track {/*轨道*/
    height: 30px;
}
.processRange::-webkit-slider-thumb {/*滑块*/
    -webkit-appearance: none;
    height: 51px;
    width: 51px;
    margin-top: -8px; 
    margin-left: 4px;
    background: url(../assets/range_icon1.png)no-repeat; 
    background-size: 51px;
    border: none;
    border-radius: 50%; 
 }
 .rangeAgeInput:focus{
 	outline:none;
 }
</style>
