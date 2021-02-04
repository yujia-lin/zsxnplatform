<template>
  
  <router-view/>
</template>

<style>

*{padding:0;margin:0;color:#333;-webkit-text-size-adjust: none;}
li {list-style:none;}
img {border:none;vertical-align:bottom}
a{text-decoration:none;}
h1,h2,h3,h4,h5{font-weight: 400;}
.tac{
	text-align: center;
}
.clear {
	zoom: 1;
}
.ui-fl{
	float: left;
}
.ui-fr{
	float: right;
}
.clear:after {
	display: block;
	content: '';
	clear: both;
}
.f_flex {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
}

.z_flex {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
}
.userColorBlock {
    height: 20rpx;
    background: #F8F9FB;
}
/*每个页面公共css */
</style>
