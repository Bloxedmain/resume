import echarts from 'echarts';
var $ = require('jquery');
window.$ = $
export default {
    data() {
        return {
            chartDom: null           
        }
    },
    methods: {
        setHeight(data) {
            let height = data ? data : this.parent.$el.offsetHeight
            this.$refs.widgetShow.style.height = height - 142 + 'px'
        },        
        init() {
            //基于准备好的dom，初始化echarts实例
            this.setHeight()
            this.chartDom = echarts.init(this.$refs.widgetShow);
            return this;            
        },
        /*实时监控窗口大小重布局*/
        resetResize(obj){
            this.setHeight(obj && obj.height)
            this.chartDom &&  setInterval(() => {this.chartDom.resize();}, 1000)
            
        },
    },
    computed: {
        parent() {
            let result = this.$parent;
            while (result.$options.name !== 'GridItem') {
                result = result.$parent;
            }
            return result;
        }
    },
    mounted() {
    },
    destroyed() {
        $(window).off('resize');
    }    
}