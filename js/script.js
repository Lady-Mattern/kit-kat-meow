/*----- constants -----*/

const PLAYERS = {
    '1': 'X',
    '-1': 'O',
    'null': ''
};

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/

let winner, turn, gameboard;

/*----- cached element references -----*/

const $squareEls = $('.square');
const $messageEl = $('h2');
const $buttonEl = $('button');
const $gameboardEl = $('#gameboard');

/*----- event listeners -----*/
/*----- functions -----*/