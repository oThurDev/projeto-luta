//caracteristicas de um personagem padrão
class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life (newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

//criando um personagem -> knight
class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

//criando um personagem -> sorcerer
class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 90;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

//criando um personagem -> little monster
class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

//criando um personagem -> big monster
class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.attack = 18;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

//criando o cenario
class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject
    }

    startGame() {
        this.update();

        //botao de atacar
        this.fighter1El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.life').style.width = `${f1Pct}%`;

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.life').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if (attacking.life <= 0) {
            this.log.addMessage(`${attacking.name}: Você morreu, morto não joga!`);
            return;
        } else if (attacked.life <= 0) {
            this.log.addMessage(`${attacking.name}: Atacando um morto KKKK`);
            return;
        }

        //ataque
        let attackFactor = (Math.random() * 2).toFixed(2);
        let actualAttack = attacking.attack * attackFactor

        //defesa
        let defenseFactor = (Math.random() * 2).toFixed(2)
        let actualDefense = attacked.defense * defenseFactor

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }
}

class Log {
    list = []

    constructor(listEl) {
        this.listEl = listEl
    }

    addMessage(message) {
        this.list.push(message)
        this.render()
    }

    render() {
        this.listEl.innerHTML = '';
        
        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}