const player1 = createKnight("Cavalheiro")
const player2 = createLittleMonster()

stage.startGame(
    player1,
    player2,
    document.querySelector('#player1'),
    document.querySelector('#player2'),
)