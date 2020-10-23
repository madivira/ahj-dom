/*Соберите инфраструктуру проекта на базе 
Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Поскольку мы более гуманны, вам нужно реализовать 
лишь первую часть этой игры - перемещение объекта в DOM Tree.

Для этого самостоятельно разработайте игровое поле 4x4 
и персонажа в виде картинки img (при загрузке страницы 
должен программно генерироваться и ставиться в рандомную 
позицию внутри игрового поля). С помощью функции setInterval 
запланируйте перемещение существующего объекта img в другое поле 
(алгоритм - рандомное перемещение, без перемещения в то же самое поле).

Для картинки персонажа используйте следующую:



Важно: не используйте removeChild! 
Проверьте, что будет, если Node изменить родителя.

Всё должно собираться через Webpack (включая картинки и стили) 
и выкладываться на Github Pages через CI.

В качестве результата пришлите проверяющему ссылку на ваш GitHub-проект. 
Не забудьте установить бейджик сборки.*/

// добавить в дом массив 4х4 и по нему перемещать картинку рандомно,
// исключая ту клетку, на которой стоит сейчас
let gameboard = document.getElementsByClassName("game-board")[0];

for(let i = 4; i > 0; i-=1){
    let raw = document.createElement("div");
    raw.className = `raw-${i}`;
    gameboard.insertBefore(raw, gameboard.firstChild);
    for(let j = 4; j > 0; j-=1){
        let col = document.createElement("div");
        col.style = "width: 120px; height: 120px; color: blue; display: inline-block; border: 4px solid black; margin-left: 4px";
        col.className = `col-${j}`;
        raw.insertBefore(col, raw.firstChild);
    }
}
let cellRaw = 0;
let cellCol = 0;

let image = document.createElement("img");
image.style = " display:flex;"
image.setAttribute("src","src/img/goblin.png");

function showImage(){
    let rawRandom = Math.floor(Math.random() * 4 + 1);
    let colRandom =  Math.floor(Math.random() * 4 + 1);
    
    if(`${cellRaw}${cellCol}` == `${rawRandom}${colRandom}`){
        showImage();
    } else{
        cellRaw = rawRandom;
        cellCol = colRandom;
        let rawImage = document.getElementsByClassName(`raw-${cellRaw}`)[0];
        let colImage = rawImage.getElementsByClassName(`col-${cellCol}`)[0];
        colImage.insertBefore(image, colImage.firstChild);
    }
}

setInterval(showImage, 1000)