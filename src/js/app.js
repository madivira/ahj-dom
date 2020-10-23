const gameboard = document.getElementsByClassName('game-board')[0];

const im = document.createElement('img');
im.style = ' display:flex;';
im.setAttribute('src', '../src/img/goblin.png');

gameboard.insertBefore(im, gameboard.firstChild);

const im1 = document.createElement('img');
im1.style = ' display:flex;';
im1.setAttribute('src', './src/img/goblin.png');

gameboard.insertBefore(im1, gameboard.firstChild);

const im2 = document.createElement('img');
im2.style = ' display:flex;';
im2.setAttribute('src', '/src/img/goblin.png');

gameboard.insertBefore(im2, gameboard.firstChild);

const im3 = document.createElement('img');
im3.style = ' display:flex;';
im3.setAttribute('src', 'src/img/goblin.png');

gameboard.insertBefore(im3, gameboard.firstChild);

const im4 = document.createElement('img');
im4.style = ' display:flex;';
im4.setAttribute('src', '../img/goblin.png');

gameboard.insertBefore(im4, gameboard.firstChild);


const im5 = document.createElement('img');
im5.style = ' display:flex;';
im5.setAttribute('src', 'img/goblin.png');

gameboard.insertBefore(im5, gameboard.firstChild);

const im6 = document.createElement('img');
im6.style = ' display:flex;';
im6.setAttribute('src', './img/goblin.png');

gameboard.insertBefore(im6, gameboard.firstChild);

for (let i = 4; i > 0; i -= 1) {
  const raw = document.createElement('div');
  raw.className = `raw-${i}`;
  gameboard.insertBefore(raw, gameboard.firstChild);
  for (let j = 4; j > 0; j -= 1) {
    const col = document.createElement('div');
    col.style = 'width: 120px; height: 120px; color: blue; display: inline-block; border: 4px solid black; margin-left: 4px';
    col.className = `col-${j}`;
    raw.insertBefore(col, raw.firstChild);
  }
}
let cellRaw = 0;
let cellCol = 0;

const image = document.createElement('img');
image.style = ' display:flex;';
image.setAttribute('src', '../src/img/goblin.png');

function showImage() {
  const rawRandom = Math.floor(Math.random() * 4 + 1);
  const colRandom = Math.floor(Math.random() * 4 + 1);

  if (`${cellRaw}${cellCol}` === `${rawRandom}${colRandom}`) {
    showImage();
  } else {
    cellRaw = rawRandom;
    cellCol = colRandom;
    const rawImage = document.getElementsByClassName(`raw-${cellRaw}`)[0];
    const colImage = rawImage.getElementsByClassName(`col-${cellCol}`)[0];
    colImage.insertBefore(image, colImage.firstChild);
  }
}

setInterval(showImage, 1000);
