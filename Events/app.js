const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    }
  },
  methods: {
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },

    setName(e, lastName) {
      this.name = e.target.value + lastName;
    },

    submitForm(e){
    },

    confirmName() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');