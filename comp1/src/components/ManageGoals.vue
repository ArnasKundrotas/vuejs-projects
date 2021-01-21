<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>

        <!-- <teleport to="#app"> -->
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid</h2>
                <p>Please enter atleast few chars</p>
                <button @click="confirmError">OK</button>
            </error-alert>
        </teleport>

    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === '') {
                this.inputIsInvalid = true;
            }
        },

        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>