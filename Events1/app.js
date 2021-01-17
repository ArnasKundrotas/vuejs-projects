const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    }
  },
  methods: {
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },

    setName(e) {
      this.name = e.target.value;
    },

    submitForm(e){
    },

    reset() {
      this.name = '';
    }

  }
});

app.mount('#events');