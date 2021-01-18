const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: '',
            isVisible: true
        }
    },
    computed: {
        btnCap() {
            return this.isVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.task);
        },

        toggleTasks() {
            this.isVisible = !this.isVisible;
        }

    }
});

app.mount('#assignment');