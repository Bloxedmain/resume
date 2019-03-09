<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
    <div class="home">
        <el-row class="dashcontent">
		<el-col class="right-menu">
        <div   class="dash">
        	<div>
        		<headNav></headNav>
        	</div>
        	<div class="component">
		      	<grid-layout
			            :layout="layout"
			            :col-num="6"
			            :row-height="30"
			            :autoSize="true"
			            :is-draggable="true"
			            :is-resizable="true"
			            :useCssTransforms ="true"
			            :vertical-compact="true"
			            :margin="[10, 10]"
			            :use-css-transforms="true">  
			        <grid-item v-for="item in layout"
			        	       :key="item.i" 
			                   :x="item.x"
			                   :y="item.y"
			                   :w="item.w"
			                   :h="item.h"
			                   :i="item.i"
			                   @move="moveEvent"
			                   @moved="movedEvent"
			                   @resized="resizedEvent"
			                    class="griditem">
							 <el-row class="drag-title">
							 	<el-col :span="23">{{item.title}}</el-col>
							 </el-row>
							  <el-row class="drag-content">
							  	<el-col :span="24">
							  		<component v-bind:is="item.component"  ref="childWidget"></component>
							  	</el-col>
							 </el-row>
			        </grid-item>
			    </grid-layout> 
			 </div>   
        </div>
        </el-col>
        </el-row>
    </div>
    
</template>
<script>
    import dashView from './dashView.js';
     export default dashView;
   
</script>
<style lang="less">
	@import url("./dashView.less");
</style>
