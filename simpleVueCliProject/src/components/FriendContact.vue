<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <!-- <button @click="toggleDetials">Show detials</button> -->
        <button @click="toggleDetials">{{ detialAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detialAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            detialAreVisible: false,
            friend: {
                    id: 'arnas',
                    name: 'Arnas K',
                    phone: '000 000 0001',
                    email: 'arnas@gmail.com'
                }
        };
    },
    methods: {
        toggleDetials() {
            this.detialAreVisible = !this.detialAreVisible;
        }
    }
}
</script>