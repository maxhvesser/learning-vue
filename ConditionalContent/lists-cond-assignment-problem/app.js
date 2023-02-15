const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTaskText: '',
            listVisible: true,
        };
    },
    computed: {
        listVisibleButtonText() {
            return this.listVisible ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTaskText);
        },
        toggleListVisibility() {
            this.listVisible = !this.listVisible;
        }
    },
});

app.mount('#assignment');