Vue.component('no1', {
    template: "#no1",
    props: ['box_arr'],
    data() {
        return {
            arr: this.box_arr,
            index: 0,
            tran: 'l'
        }
    },
    methods: {
        l() {
            this.tran = 'l'
            this.index++
            if (this.index >= this.arr.length) {
                this.index = 0
            }
        },
        r() {
            this.tran = 'r'
            this.index--
            if (this.index <= -1) {
                this.index = this.arr.length - 1
            }
        }
    },
    mounted() {
        var img = this.$refs.img[0]
        img.onload = () => {
            var h = this.$refs.img[0].offsetHeight
            for (var i = 0; i < this.$refs.img.length; i++) {
                this.$refs.img[i].style.height = h + 'px'
            }
            this.$el.style.height = h + 'px'
        }
    }
})

new Vue({
    el: "#box",
    data: {
        arr: [
           'https://c-ssl.duitang.com/uploads/item/201803/03/20180303102137_J3diR.thumb.700_0.jpeg',
           'https://c-ssl.duitang.com/uploads/item/201907/28/20190728224636_ttnnc.thumb.700_0.jpg',
           'https://c-ssl.duitang.com/uploads/item/201802/25/20180225102045_JaZZt.thumb.700_0.jpeg',
           'https://c-ssl.duitang.com/uploads/item/201710/04/20171004174534_5zrUi.thumb.700_0.jpeg', 
        ]
    }
})