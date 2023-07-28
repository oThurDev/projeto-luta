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