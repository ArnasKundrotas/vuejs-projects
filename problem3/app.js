const app = Vue.createApp ({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    },
    watch: {
        counter() {
            setTimeout(() => {
                this.counter = 0;
            },5000);
        }
    },
    computed: {
        result() {
            if (this.counter <= 37) {
                return 'Not there yet';
            } else {
                return 'Too much';
            }
        }
    }
});

app.mount('#assignment');