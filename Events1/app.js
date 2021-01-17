const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: ''
      // lastname: ''
    }
  },
  watch: {
    counter(val){
      if(val > 15) {
        const that = this;
        setTimeout(() => {
          this.counter = 0;
        },2000)
      }
    }
    // name(val) {
    //   if(val === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = val + ' ' + this.lastname;
    //   }
    // },
    // lastname(val) {
    //   if(val === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + val;
    //   }
    // }
  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastname === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastname;
      }
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
    },

    outFullName() {
      if(this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Kundrotas';
      }
    }

  }
});

app.mount('#events');