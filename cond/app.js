const app = Vue.createApp({
  data() {
    return { 

      goals: [],
      enteredGoalVal: ''

    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalVal);
    }, 

    removeGoal(i) {
      this.goals.splice(i, 1);
    }
  }
});

app.mount('#user-goals');
