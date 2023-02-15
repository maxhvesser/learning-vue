const app = Vue.createApp({
    data() {
        return {
            name: 'Maximilian',
            age: 29,
            crimeImageUrl: 'https://images.pexels.com/photos/6065241/pexels-photo-6065241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random().toPrecision(2);
        }
    },
});

app.mount('#assignment');