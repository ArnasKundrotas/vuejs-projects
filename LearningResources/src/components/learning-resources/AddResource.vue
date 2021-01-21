<template>

    <base-dialog v-if="inputIsInvalid" title="Invalid input" @close="confirmError">

        <!-- <template v-slot:default> -->
        <template #default>
            <p>Unfortunately at least one input value is invalid</p>
            <p>Please check all inputs</p>
        </template>

        <!-- <template v-slot:action></template> -->
        <template #actions>
            <base-button @click="confirmError">OK</base-button>
        </template>

    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">

            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>

            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" row="3" ref="descInput"></textarea>
            </div>

            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>

            <div>
                <base-button
                    type="submit"
                >Add Resource
                </base-button>
            </div>

        </form>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            inputIsInvalid: false
        }
    },
    inject: ['addResource'],
    methods: {
        submitData() {

            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
                this.inputIsInvalid = true;
            } else {
                this.addResource(enteredTitle, enteredDesc, enteredLink);
            }


        }, 

        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}

</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>

