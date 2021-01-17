const app = Vue.createApp({
    data() {
        return {
            
            name: 'Arnas',
            age: 100,
            img: 'https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=667&h=349'

        }

    },
    methods: {
        agePlus() {
            return this.age + 5;
        },

        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');