const app = Vue.createApp({
    data() {
        return {
            cssClass: '',
            pIsVis: true

        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.cssClass === 'user1',
                user2: this.cssClass === 'user2',
                visible: this.pIsVis,
                hidden: !this.pIsVis
            }
        }
    },
    methods: {

        toggleCssClass() {
            this.pIsVis = !this.pIsVis;
        }

    }
});

app.mount('#assignment')