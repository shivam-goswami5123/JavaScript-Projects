//board dimensions
let rows=40;
let cols=40;
let board;
let context;
let boxsize=25;

//Add some features like score , sound , background

//snake head
let snakeX=boxsize*5;
let snakeY=boxsize*5;

//food
let foodX;
let foodY;

let velocityX=0;
let velocityY=0;

let snakebody=[];

let gameover=false;

window.onload = function(){
    board=document.getElementById("board");
    board.height=rows*boxsize;
    board.width=cols*boxsize;
    context=board.getContext("2d"); //for creating board on page

    document.addEventListener("keyup",changedirection);
    placefood();
    setInterval(update,1000/10);

}

function update(){
    if(gameover){
        return;
    }

    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="red";
    context.fillRect(foodX,foodY,boxsize,boxsize);

    if(foodX == snakeX && foodY == snakeY){
        snakebody.push([foodX,foodY]);
        placefood();
    }

    for(let i=snakebody.length-1;i>0;i--)
    {
        snakebody[i]=snakebody[i-1];
    }
    if(snakebody.length)
    {
        snakebody[0]=[snakeX,snakeY];
    }
    context.fillStyle="lime";
    snakeX+=velocityX*boxsize;
    snakeY+=velocityY*boxsize;
    context.fillRect(snakeX,snakeY,boxsize,boxsize);
    for(let i=0;i<snakebody.length;i++)
    {
        context.fillRect(snakebody[i][0],snakebody[i][1],boxsize,boxsize);
    }

    //gameover conditions
    if(snakeX<0 || snakeX>=cols*boxsize || snakeY<0 || snakeY>=rows*boxsize)
    {
        gameover=true;
        alert("Game Over");

    }

    for(let i=0;i<snakebody.length;i++)
    {
        if(snakeX == snakebody[i][0] && snakeY == snakebody[i][1]){
            gameover=true;
            alert("Game Over");
        }
    }


}

function changedirection(e){
    if(e.code == "ArrowUp" && velocityY!=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.code == "ArrowDown" && velocityY!=-1){
        velocityX=0;
        velocityY=1;
    }
    else if(e.code == "ArrowLeft" && velocityX!=1){
        velocityX=-1;
        velocityY=0;
    }
    else if(e.code == "ArrowRight" && velocityX!=-1){
        velocityX=1;
        velocityY=0;
    }


}


function placefood(){
    foodX=Math.floor(Math.random()*rows)*boxsize;
    foodY=Math.floor(Math.random()*cols)*boxsize;
}