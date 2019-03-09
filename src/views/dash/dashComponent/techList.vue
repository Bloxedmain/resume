<template>
	<el-row>
		<el-card class="box-card">
      <el-row>
          <el-col :span="6">框架类库 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">
            jQuery   Vue【熟练】  AngularJS【了解】
          </el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">UI框架  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">BootStrap jQueryUI Element UI</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">CSS预处理器  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft"> LESS SASS</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">数据可视化  ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">Echarts </el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">模块管理 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">Webpack</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">版本控制及操作工具 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">Git ftp smartgit</el-tag></el-col>
      </el-row>
      <el-row>
          <el-col :span="6">其他语言 ：</el-col>
          <el-col :span="18" ><el-tag class="alignleft">python php typescript 【入门级】</el-tag></el-col>
      </el-row>
		</el-card>
	</el-row>
</template>
<script>
    import techList from './techList.js';
    export default techList;
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
