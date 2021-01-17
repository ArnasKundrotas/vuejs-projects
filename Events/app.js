const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      return this.counter + 1;
    }
  }
});

app.mount('#events');