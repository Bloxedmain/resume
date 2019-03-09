import mixin from './mixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
            color: [
                '#d72941',
                //'#f1c35b',
               // '#99c736',
               // '#75813b',
                //'#4e3829',
                //'#6daaaf',
                //'#46485f',
                //'#342113',
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
    watch:{
    },
    methods: {
        update() {
            var groupData = [
                    {value:85, name:'能力值'},
                    {value:15, name:'  '},
                ]
            var groupDataX = [];
            var groupDataY = groupData.sort(function(a, b) {
                return b.value - a.value
            });
            for (let index = 0; index < groupDataY.length; index++) {
                const element = groupDataY[index];
                let name = element.name,
                    value = element.value
                groupDataX.push({
                    name: '',
                    value: value,
                })
            } 
            debugger
            this.chartDom.setOption({
                title: {
                    text: '100%',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 22
                    }
                },                
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        // selectedMode: 'single',
                        hoverAnimation: false,
                        legendHoverLink: false,
                        radius: ['31%', '35%'],
                        color: ['#bbb'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            },
                        },
                        tooltip: {
                            show: false,
                        },
                        data: groupDataX
                    },
                    {
                        name: '',
                        // selectedMode: 'single',
                        type: 'pie',
                        radius: ['35%', '75%'],
                        color: this.color,
                        label: {
                            normal: {
                                formatter: '{b}\n{d}%'
                            },
                        },
                        data: groupDataY
                    }
                ]

            });
        },
    },
    mounted: function () {
        this.init().update();
    }
}