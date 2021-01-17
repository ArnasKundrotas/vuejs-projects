/* Vue 3 CDN */
// const { createApp, red } = Vue;
// const app = createApp ({
//     setup() {
//         data() {
//             return {
//                 goals: [],
//                 enteredVal: ''
//             };
//         },
//         methods: {
//             addGoal() {
//                 this.goals.push(this.enteredVal);
//             }
//         }
//     }
// });


/* Vue 2 CDN */
new Vue({
    el: "#app",
    data() {
        return {
            goals: [],
            enteredVal: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredVal);
            this.enteredVal = '';
        }
    }
});

// const textEle = document.querySelector('ul');
// const btnEle = document.querySelector('button')
// const inpEle = document.querySelector('input')

// function addGoal() {
//     const entVal = inpEle.value;
//     const listIt = document.createElement('li');
//     listIt.textContent = entVal;
//     textEle.appendChild(listIt);
//     inpEle.value = '';
// }

// btnEle.addEventListener('click', addGoal);
