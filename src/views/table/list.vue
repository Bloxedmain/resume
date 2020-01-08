<template>
	<el-row>
		<el-row>
			<div>
        		<headNav></headNav>
        	</div>
		</el-row>
		<el-row>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <el-button style="float: left; padding: 3px 0" type="text">项目描述</el-button>
		  </div>
			  <el-table
			    ref="filterTable"
			    :stripe="true"
			    :header-cell-style="tableHeaderColor"
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column type="expand">
			      <template slot-scope="props">
			        <el-form label-position="left" inline class="demo-table-expand">
			          <el-row>
				          <el-form-item label="项目名称">
				            <span>{{ props.row.name }}</span>
				          </el-form-item>
			          </el-row>
			          <el-row>
				          <el-form-item label="项目描述">
				            <span>{{ props.row.desc }}</span>
				          </el-form-item>
			          </el-row>
			          <el-row>
				          <el-form-item label="个人职责">
				            <span>{{ props.row.duty }}</span>
				          </el-form-item>
			          </el-row>
			          <el-row>
				          <el-form-item label="所属企业">
				            <span>{{ props.row.company }}</span>
				          </el-form-item>
				       </el-row>   
			          <el-row>
				          	<el-form-item label="开发工具">
				            <span>{{ props.row.tool}}</span>
				          </el-form-item>
			          </el-row>
			          <el-row>
				          	<el-form-item label="开发技术">
				            <span>{{ props.row.tech }}</span>
				          </el-form-item>
			          </el-row>
			        </el-form>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="项目名称"
			      width="140">
			    </el-table-column>
			    <el-table-column
			      prop="desc"
			      label="项目描述">
			    </el-table-column>
			    <el-table-column
			      prop="duty"
			      label="个人职责">
			    </el-table-column>
			    <el-table-column
			      prop="company"
			      width="150"
			      label="所属企业">
			    </el-table-column>
			    <el-table-column
			      prop="tag"
			      label="标签"
			      width="150"
				  show-overflow-tooltip	
			      :filters="[{ text: '思眭', value: '上海思眭信息技术有限公司' }, { text: '蓝科', value: '蓝科科技有限公司' }]"
			      :filter-method="filterTag"
			      filter-placement="bottom-end">
			      <template slot-scope="scope">
			        <el-tag
			          :type="scope.row.tag === '上海思眭信息技术有限公司' ? 'primary' : 'success'"
			          disable-transitions>{{scope.row.tag}}</el-tag>
			      </template>
			    </el-table-column>
			  </el-table>
			</el-card>
		</el-row>
	</el-row>
</template>
<script>
    import list from './list.js';
     export default list;
   
</script>
<style lang="less">
	@import url("./list.less");
</style>
