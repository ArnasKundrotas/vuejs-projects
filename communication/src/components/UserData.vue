<template>
    <section>
        <input v-model="enteredName" type="text" placeholder="Name"/>
        <input v-model="enteredAge" type="text" placeholder="Age"/>
        <button @click="setUserData">Set User Data</button>
    </section>
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        setUserData() {
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>

<style>

</style>