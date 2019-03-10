import axios from 'axios';

import vueGridLayout from 'vue-grid-layout';
const GridLayout = vueGridLayout.GridLayout;
const GridItem = vueGridLayout.GridItem;
export default {
    data() {
        return {
            layout:[
               {"x":0,"y":0,"w":3,"h":10,"i":"0",component:"personal",title:'个人基本信息'},
               {"x":3,"y":0,"w":3,"h":10,"i":"1",component:"techList",title:'开发技术掌握概览'},
               {"x":0,"y":40,"w":3,"h":10,"i":"2",component:"LineComponent",title:'框架类库[VUE]'},
               {"x":3,"y":40,"w":3,"h":10,"i":"3",component:"pieComponent",title:'UI框架【BootStrap/Element UI】'},
               {"x":0,"y":80,"w":6,"h":12,"i":"4",component:"radarComponent",title:'技术栈能力值分布'},
                
            ],
            beforemove :{},
            aftermoved :{},
        }
    },
    components:{
        GridLayout,
        GridItem,
        headNav : ()=> import("cps/headNav.vue"),
        personal : ()=> import("views/dash/dashComponent/personal.vue"),
        techList : ()=> import("views/dash/dashComponent/techList.vue"),
        LineComponent : ()=> import("views/dash/dashComponent/LineComponent.vue"),
        pieComponent : ()=> import("views/dash/dashComponent/pieComponent.vue"),
        radarComponent: ()=> import("views/dash/dashComponent/radarComponent.vue")
        

    },
	mounted() {
      
    },
    methods: {
        formatter(row, column) {
            return row.address;
        },
       cellClick(row, column, cell, event){
  	       this.$message({type:"info",message:"点我"});
        },
        moveEvent: function(i, newX, newY){
            console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
            this.beforemove={i:i,x:newX,y:newY};
        },
        movedEvent: function(i, newX, newY){
            console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
         
        },
         resizedEvent: function (i, newH, newW, newHPx, newWPx) {
            console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            this.$refs.childWidget[i].resetResize({
                height: newHPx
            });
        }, 
    },
    watch:{
    },
}