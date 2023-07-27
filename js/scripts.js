let char = new Knight('Arthur')
let monster = new Sorcerer('Bruno')

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

stage.startGame();