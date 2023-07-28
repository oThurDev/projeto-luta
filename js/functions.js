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
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`
        let player1LifeBar = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.life').style.width = `${player1LifeBar}%`

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`
        let player2LifeBar = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.life').style.width = `${player2LifeBar}%`
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0) {
            log.addMessage(`${attacking.name}: Você morreu, morto não joga!`);
            return;
        } else if (attacked.life <= 0) {
            log.addMessage(`${attacking.name}: Está atacando um morto KKKK`);
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            log.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update();
    }
}

const log = {
    list: [],
    
    addMessage(message) {
        this.list.push(message);
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}