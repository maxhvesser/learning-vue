const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        subtract(num) {
            this.counter = this.counter - num;
        },
        updateName(event) {
            this.name = event.target.value;
        },
        submitForm() {
            alert('Submitted!');
        },
        confirmName(event) {
            this.confirmedName = event.target.value;
        }
    },
});

app.mount('#events');