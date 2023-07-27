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
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    startGame() {
        this.update();

        //botao de atacar
        this.fighter1El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attack-button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.life').style.width = `${f1Pct}%`;

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.life').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} esta atacando ${attacked.name}`)

        this.update()
    }
}