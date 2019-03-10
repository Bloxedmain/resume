import mixin from './mixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            color: [
                '#6daaaf',
                '#46485f',
                '#342113',
                '#dfb794',
                '#8a5d3c',
                '#b7d43a',
                '#1c8a43',
                '#c4187a',
                '#c27db3',
                '#479ddb',
                '#666d75',
                '#9eaebb',
                '#1e5c73',
                '#f5ef5b',
                '#48a39c',
                '#3f73a3',
                '#7954a1',
                '#ef91ab',
                '#991e5d'
            ]
        }
    },
    methods: {
        update() {
            var option = {
                title: {
                    text: ''
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                       }
                    },
                    indicator: [
                       { name: 'HTML', max: 100},
                       { name: 'Javascript/Jquery', max: 100},
                       { name: 'VUE', max: 100},
                       { name: 'angular/react', max: 100},
                       { name: 'Git', max: 100},
                       { name: 'NODE', max: 100},
                       { name: 'webpack', max: 100},
                       { name: 'CSS/LESS', max: 100},
                       { name: 'Element/iview/bootstrap', max: 100},

                    ],
                    splitArea : {
                        show : true,   
                        areaStyle : {
                           color: this.color 
                           // 图表背景网格的颜色
                        }
                     },
                },
                series: [{
                    name: '',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : [90,  80, 80,30, 80,40,50,85,80],
                            name : ''
                        }
                    ]
                }]
            };
            this.chartDom.setOption(option);
            this.chartDom &&  setInterval(() => {this.chartDom.resize();}, 1000)
        },
    },
    mounted: function () {
        this.init().update();
    },
    watch:{
    },
}