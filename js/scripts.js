let char = new Knight('Arthur')
let monster = new Sorcerer('Bruno')

let log = new Log(document.querySelector('.log'))

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.startGame();