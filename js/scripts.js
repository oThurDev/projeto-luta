const player1 = createKnight('Thur')
const player2 = createSorcerer('Brunex')

stage.startGame(
    player1,
    player2,
    document.querySelector('#player1'),
    document.querySelector('#player2'),
)