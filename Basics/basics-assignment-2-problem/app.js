const app = Vue.createApp({
    data() {
        return {
            outputOneText: 'Output',
            outputTwoText: "Output",
        };
    },
    methods: {
        showAlert() {
            alert('I\'m showing an alert as told.');
        },
        updateOutputOne(event) {
            this.outputOneText = event.target.value;
        },
        updateOutputTwo(event) {
            this.outputTwoText = event.target.value;
        }
    },
});

app.mount('#assignment');