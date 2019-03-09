import mixin from './mixin.js'
export default {
    mixins: [mixin],
    data() {
        return {
        }
    },
    watch:{
    },
    methods: {
    },
    mounted: function () {
        this.init().update();
    }
}