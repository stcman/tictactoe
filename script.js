let ticTacStart = () => {
let selector;
selector = document.querySelectorAll(".game-box");
document.querySelector('.player-X').classList.add('active');
document.querySelector('.player-X').classList.remove('winner');
document.querySelector('.player-O').classList.remove('winner');

selector = [...selector];

selector.forEach(el => {
    el.innerHTML = '';
})

let bit = 1; //turn manager
let arrX = [];
let arrO = [];

let wins = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['seven', 'five', 'three']
]


let checkWin = (picks, turn) => {
    for(i = 0; i < 8; i++){
        let count = 0;
        for(j = 0; j < 3; j++){
            if(picks.includes(wins[i][j])){
                count++;
            }
        }
        if(count > 2) { //if tictactoe

            selector.forEach(el => {
                el.removeEventListener('click', fill)
            })

            document.querySelector('.player-X').classList.remove('active');
            document.querySelector('.player-O').classList.remove('active');
            document.querySelector(`.player-${turn}`).classList.add('winner');
        }
    }
}

let fill = (el) => {
    el = el.target;

    if(bit == 1) {
        document.querySelector('.player-X').classList.remove('active');
        document.querySelector('.player-O').classList.add('active');
        document.querySelector(`.${el.classList[1]}`).innerHTML = '<i class="ion-close"></i>';
        document.querySelector(`.${el.classList[1]}`).removeEventListener('click', fill);
        arrX.push(el.classList[1]);
        checkWin(arrX, 'X');
        bit = 0;
    }else {
        document.querySelector('.player-O').classList.remove('active');
        document.querySelector('.player-X').classList.add('active');
        document.querySelector(`.${el.classList[1]}`).innerHTML = '<i class="ion-android-radio-button-off"></i>';
        document.querySelector(`.${el.classList[1]}`).removeEventListener('click', fill);
        arrO.push(el.classList[1]);
        checkWin(arrO, 'O');
        bit = 1;
    }
}

selector.forEach(el => {
    el.addEventListener('click', fill)
})
}

document.querySelector('.new-game-btn').addEventListener('click', ticTacStart);


