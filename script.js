'use strict';

const divCells = document.querySelector('.cell-divs');
//const buttons = document.querySelectorAll('grid-size-btns');
let penColor = "#000";
//console.log(buttons.entries);


const clearBtn = document.querySelector('#clear-grid-btn');
const inkBtn = document.querySelector('#ink-btn');
const eraseBtn = document.querySelector('#eraser-btn');
const rgbBtn = document.querySelector('#rgb-btn');
const colorPicker = document.querySelector('#color-picker');

const toogleBox = document.querySelector('#toogle-box');

let css = document.querySelector(':root');
let cssValue = getComputedStyle(css);
//console.log(cssValue);

//console.log(cssValue.getPropertyValue('--gridValue'));
let gridSize = cssValue.getPropertyValue('--gridValue'); //default size 16*16
let cellColor = cssValue.getPropertyValue('--cellColor');
//console.log(gridSize);


function createDivs() {

    for (let i = 0; i < gridSize ** 2; i++) {

        const cells = document.createElement('div');

        cells.classList.add('grid-cell');
        divCells.appendChild(cells);


    }
}
createDivs();


function toogleGrid() {
    const toogleBox = document.querySelector('#toogle-box');
    const gridCell = document.querySelectorAll(".grid-cell");

    toogleBox.addEventListener('click', function (e) {
        gridCell.forEach((cell) => {
            if (toogleBox.checked == true) {
                cell.style.border = '#eceaea 1px solid';
            } else {
                cell.style.border = 'none';
            }
        });

    });
}



function pickColor() {
    document.getElementById('color-picker').addEventListener('change', (e) => { //can also use 'input'
        penColor = e.target.value;
        console.log(penColor);
        return penColor;
    });
};

function pickBgColor() {
    document.getElementById('bg-picker').addEventListener('change', (e) => {
        divCells.style.background = e.target.value;
    });
};

pickBgColor();

function generateRndColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //console.log(randomColor);
}

function hoverDraw() {

    const cellPen = document.querySelectorAll('.grid-cell');
    pickColor();

    //console.log(color);

    cellPen.forEach((cell) => {

        cell.addEventListener('mouseover', function (e) {
            //let color = pickColor();
            cell.style.background = penColor;
            //cell.className = 'color-cell';  
            //console.log(e);
        })
    })
}

function rgbDraw() {
    const cellPen = document.querySelectorAll('.grid-cell');

    cellPen.forEach((cell) => {

        cell.addEventListener('mouseover', function (e) {
            cell.style.background = generateRndColor();
        })
    })
}

function pickerDraw() {
    const cellPen = document.querySelectorAll('.grid-cell');

    cellPen.forEach((cell) => {

        cell.addEventListener('mouseover', function (e) {
            cell.style.background = colorPicker.style.value;
        })
    })
}

function hoverErase() {
    const cellEraser = document.querySelectorAll('.grid-cell');

    cellEraser.forEach((cell) => {
        cell.addEventListener('mouseover', function (e) {
            cell.style.background = "none";

        });
                
    });

}

function rightOptsDefault() {
    const defaultButton = document.querySelector('#default-btn');
    const bgPicker = document.getElementById('bg-picker')

    defaultButton.addEventListener('click' , function(e) {
        toogleBox.checked = true;
        
        divCells.style.background = '#cad1bf';
        bgPicker.value = '#cad1bf';

    });
}

rightOptsDefault();

function activeTopBtn() {
    const clickedButton = document.querySelectorAll('.top-button , .tfocused-button');

    clickedButton.forEach((btn, index, array) => {

        btn.addEventListener('click', function (e) {

            for (let i = 0; i <= array.length; i++) {
                if (array[i].className === 'tfocused-button') {
                    array[i].className = 'top-button';
                    console.log(array[i].className);
                }
                btn.className = 'tfocused-button';
            }
        });
    });
}


function activeSideBtn() {
    const clickedButton = document.querySelectorAll('.side-button , .sfocused-button');

    clickedButton.forEach((btn, index, array) => {

        btn.addEventListener('click', function (e) {

            for (let i = 0; i <= array.length; i++) {
                if (array[i].className === 'sfocused-button') {
                    array[i].className = 'side-button';
                    console.log(array[i].className);
                }
                btn.className = 'sfocused-button';
            }
        });
    });
}



inkBtn.addEventListener('click', hoverDraw);

rgbBtn.addEventListener('click', rgbDraw);

eraseBtn.addEventListener('click', hoverErase); 




function setGridSize() {

    let sizeBtn16 = document.getElementById('16x-btn');
    let sizeBtn32 = document.getElementById('32x-btn');
    let sizeBtn64 = document.getElementById('64x-btn');
    let sizeBtn98 = document.getElementById('98x-btn');


    sizeBtn16.addEventListener('click', function (e) {
        clearGrid();
        resetGridSize();
        gridSize = 16;
        css.style.setProperty('--gridValue', gridSize);
        toogleBox.checked = true;
        createDivs();
        toogleGrid();
        hoverDraw();


        return;
        //console.log (e);
    });

    sizeBtn32.addEventListener('click', function (e) {
        clearGrid();
        resetGridSize();
        gridSize = 32;
        css.style.setProperty('--gridValue', gridSize);
        toogleBox.checked = true;
        createDivs();
        toogleGrid()
        hoverDraw();
        //console.log(e);
    });

    sizeBtn64.addEventListener('click', function (e) {
        clearGrid();
        resetGridSize();
        gridSize = 64;
        css.style.setProperty('--gridValue', gridSize);
        toogleBox.checked = true;
        createDivs();
        toogleGrid()
        hoverDraw();
        //console.log(e);
    });

    sizeBtn98.addEventListener('click', function (e) {
        clearGrid();
        resetGridSize();
        gridSize = 98;
        css.style.setProperty('--gridValue', gridSize);
        toogleBox.checked = true;
        createDivs();
        toogleGrid()
        hoverDraw();
        //console.log(e);
    });

    return;
}


function resetGridSize() {
    let reset = document.querySelectorAll('.grid-cell')

    reset.forEach(cell => cell.remove());

}



function clearGrid() {

    let clear = document.querySelectorAll('.grid-cell');
    clear.forEach((cell) => {
        cell.style.background = "none";
        //cell.classList = 'grid-cell';
        //console.log(cell);
    });


}

clearBtn.addEventListener('click', clearGrid);

//pickColor();

activeTopBtn();
activeSideBtn();
setGridSize();
toogleGrid();
hoverDraw();
//hoverErase();
//rgbDraw();

//rndColor();


