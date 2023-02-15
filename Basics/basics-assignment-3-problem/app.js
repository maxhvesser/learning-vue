const app = Vue.createApp({
    data() {
        return {
            total: 0,
        };
    },
    watch: {
        totalState() {
            const that = this;

            setTimeout(function () {
                that.total = 0;
            }, 5000);
        }
    },
    computed: {
        totalState() {
            if (this.total === 37) {
                return this.total;
            } else if (this.total < 37) {
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(num) {
            this.total += num;
        }
    },
});

app.mount('#assignment');