<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)': ''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // String
  // Number
  // Boolean
  // Array
  // Object
  // Date
  // Function
  // Symbol
  // Constructor (ex. Date)
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    }
  },
  emits: ['toggle-favorite', 'delete'],
  // emits: [
  //   'toggleFavorite'
  // ],
  // props:[
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    }

  }
};
</script>