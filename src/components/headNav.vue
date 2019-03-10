<template>
	<el-row>
		<el-col :span="18">
			<h2>尚耀程个人简历</h2>
		</el-col>
		<el-col :span="6">
            <div  class="btns">
                <el-button-group>
                  <el-button type="primary" size="small" @click="dashNav_click('home')">home</el-button>
                  <el-button type="primary" size="small" @click="dashNav_click('table')">table</el-button>
                  <el-button type="primary" size="small" @click="dashNav_click('sum')">sum</el-button>
                </el-button-group>
            </div>
		</el-col>
	</el-row>
</template>
<script>
export default {
   data() {
      return {
        }
    },
    components:{
    },
    methods: {
    	/**
         * @access导航
         */
        dashNav_click(url) {
        	switch(url){
        		case "home":
        			this.$router.push("/dash/dashBoard");
        			break;
        		case "table":
        			this.$router.push("/table/list");
        			break;
        		case "sum":
        			this.$router.push("/sum");
        			break;		
        	}
            
        },
    },
    watch:{
        '$route.path': function (newVal, oldVal) {
            alert(newVal + ' --- ' + oldVal);
        }
    },
  
}
</script>
<style>
.btns{
    float: right;
    margin: 20px 20px 0px 0px;
}
</style>
