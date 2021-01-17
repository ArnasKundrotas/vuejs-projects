const app = Vue.createApp({
    data() {
        return {
            msg: 'Learn React',
            msgA: 'Learn Vue',
            msgB: 'Master Vue',
            msgC: '<h3>This is H3 tag in the Vue data using v-html</h3>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.msgA;
            } else {
                return this.msgB;
            }
        }
    }
});

app.mount('#user-goal');