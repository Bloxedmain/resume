<template>
<el-row>
	<el-row>
		<div>
    		<headNav></headNav>
    	</div>
	</el-row>
	<el-row>
		<el-carousel :interval="10000"
			height="400px"
			arrow="hover" indicator-position="none"> 
		    <el-carousel-item v-for="item in data" :key="item.i">
		      	<el-row>
		      		<el-row class="drag-title">
					 	<el-col :span="23">{{item.title}}</el-col>
					 </el-row>
					  <el-row  draggable="false">
					  	<el-col :span="24">
					  		<component v-bind:is="item.component" 
					  		draggable="false"
					  		:style="{'position': 'relative', 'z-index': 999}"
					  		 ref="childWidget"></component>
					  	</el-col>
					 </el-row>
		      	</el-row>
		    </el-carousel-item>
		  </el-carousel>
	</el-row>
	<el-row>
		<el-carousel :interval="10000"
			height="400px"
			arrow="hover" indicator-position="none"> 
		    <el-carousel-item v-for="item in items" :key="item.name">
		      	<el-card class="box-card">
		      	<div slot="header" class="clearfix" >
				    <span style="float:left;">项目描述</span>
				  </div>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">项目名称 :</el-tag></el-col>
			          <el-col :span="20" >
			          		<p class="alignleft">{{item.name}}</p>
			          </el-col>
			      </el-row>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">所属企业 :</el-tag></el-col>
			          <el-col :span="20" >
			          	<p class="alignleft">
				            {{item.company}}
				          </p>
			          </el-col>
			      </el-row>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">项目描述 :</el-tag></el-col>
			          <el-col :span="20" >
				            <p class="alignleft">{{item.desc}}</p>
			          </el-col>
			      </el-row>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">个人职责 :</el-tag></el-col>
			          <el-col :span="20" >
				            <p class="alignleft">{{item.duty}}</p>
			          </el-col>
			      </el-row>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">开发工具 :</el-tag></el-col>
			          <el-col :span="20" >
			          	<p class="alignleft">
				            {{item.tool}}
				          </p>
			          </el-col>
			      </el-row>
			      <el-row class="borderbottom">
			          <el-col :span="3"><el-tag class="floatleft">开发技术 :</el-tag></el-col>
			          <el-col :span="20" >
			          	<p class="alignleft">
				            {{item.tech}}
				          </p>
			          </el-col>
			      </el-row>
				</el-card>
		    </el-carousel-item>
		  </el-carousel>
	</el-row>
</el-row>
</template>
<script>
	import total from './total.js';
 	export default total;
   
</script>
<style lang="less">
	@import url("./total.less");
</style>