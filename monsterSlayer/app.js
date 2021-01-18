function getRandomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            round: 0,
            winner: null,
            logMessages: []
        };
    },
    computed: {
        monsterBarStyle() {
            if(this.monsterHealth < 0) {
                return {width: 0};
            } else {
                return {width: this.monsterHealth + '%'};
            }
        },
        
        playerBarStyle() {
            if(this.playerHealth < 0) {
                return {width: 0};
            } else {
                return {width: this.playerHealth + '%'};
            }
        },

        specialAttackEnabler() {
            return this.round % 3 !== 0 || this.round === 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },

        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.round++;
            const attackVal = getRandomVal(5, 12);
            this.monsterHealth -= attackVal;
            this.addLogMessage('player', 'attack', attackVal);
            this.attackPlayer();

        },

        attackPlayer() {
            const attackVal = getRandomVal(8, 15);
            this.playerHealth -= attackVal;
            this.addLogMessage('monster', 'attack', attackVal);
        },

        specialAttackMonster() {
            this.round++;
            const attackVal = getRandomVal(10, 25);
            this.monsterHealth -= attackVal;
            this.addLogMessage('player', 'attack', attackVal);
            this.attackPlayer();
        },

        healPlayer() {
            this.round++;
            const healVal = getRandomVal(8, 20);
            if(this.playerHealth + healVal > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healVal;
            }
            this.addLogMessage('player', 'heal', healVal);
            this.attackPlayer();
        },

        startGame() {
            this.round = 0;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.logMessages = [];
        },

        surrender() {
            this.winner = 'monster';
        },

        addLogMessage(who, what, value) {
            this.logMessages.unshift({
              actionBy: who,
              actionType: what,
              actionValue: value
            });
          }


    }
});

app.mount('#game');