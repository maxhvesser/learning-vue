const app = Vue.createApp({
    data() {
        return {
            dynamicClass: '',
            paragraphVisible: 'visible',
            inputBackgroundColor: '',
        };
    },
    methods: {
        toggleParagraphVisibility() {
            if (this.paragraphVisible === 'visible') {
                this.paragraphVisible = 'hidden'
            } else {
                this.paragraphVisible = 'visible'
            }
        }
    },
});

app.mount('#assignment');