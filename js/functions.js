//criando caracteristicas padrão
const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0,
}

//criando os personagens
const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 12,
        defense: 6 
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 16,
        defense: 8 
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 60,
        maxLife: 60,
        attack: 8,
        defense: 4 
    }
}

const createBigMonster = (name) => {
    return {
        ...defaultCharacter,
        name: 'BigMonster',
        life: 140,
        maxLife: 140,
        attack: 20,
        defense: 10 
    }
}

//criando o cenario
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    startGame(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter1El = fighter1El;
        this.fighter2 = fighter2;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    
        this.update();
    },

    update() {
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let player1LifeBar = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.life').style.width = `${player1LifeBar}%`

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let player2LifeBar = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.life').style.width = `${player2LifeBar}%`
    },

    doAttack(attacking, attacked) {
        this.update();
    }
}