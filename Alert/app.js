
const app = Vue.createApp ({
    data() {
        return {
            output: '',
            output1: ''
        }
    },
    methods: {
        
        alert() {
            alert('some text');
        },

        setText(e) {
            this.output = e.target.value;
        },
        
        setText1(e) {
            this.output1;
        },

        setTextEnter(e){
            this.output1 = e.target.value
        }
    }
});

app.mount('#assignment');