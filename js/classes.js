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
        this._life = new Life < 0 ? 0 : newLife;
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