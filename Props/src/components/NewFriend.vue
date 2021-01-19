<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input v-model="enteredName" type="text">
        </div>
        <div>
            <label>Phone</label>
            <input v-model="enteredPhone" type="tel">
        </div>
        <div>
            <label>E-mail</label>
            <input v-model="enteredEmail" type="email">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: ['add-contact'],
        data() {
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: ''
            };
        },
        methods: {
            submitData() {
                this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
            }
        }
    }
</script>

<style>
    
</style>