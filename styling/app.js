const app = Vue.createApp({
    data() {
        return {
            divAselected: false,
            divBselected: false,
            divCselected: false
        }
    },
    computed: {
        boxAClasses() {return {active: this.divAselected};},
        boxBClasses() {return {active: this.divBselected};},
        boxCClasses() {return {active: this.divCselected};}
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.divAselected = !this.divAselected;
            } else if (box === 'B') {
                this.divBselected = !this.divBselected;
            } else {
                this.divCselected = !this.divCselected;
            }
        }
    }
});

app.mount('#styling');