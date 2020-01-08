<template>
	<el-row>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>简介</span>
		  </div>
      <el-row>
          <el-col :span="6">姓名  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">尚耀程</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">学历  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">本科</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">工作年限  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">4年</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">联系电话  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">15121053279</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">电子邮箱 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">bloxed_shangyc@163.com</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">求职状态 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">在职，可一个月内到岗</el-tag></el-col>
      </el-row>
		</el-card>
	</el-row>
</template>
<script>
    import personal from './personal.js';
    export default personal;
</script>
<style scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .alignleft{
    float: left;
    margin-bottom: 9px;
  }
</style>
