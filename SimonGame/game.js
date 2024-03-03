// alert("Game Started");
let level=0;
let gamePattern=[];
let userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];
let started=false;
function nextSequence()
{
    userClickedPattern=[];
    level=level+1;
    $("h1").text("Level"+" "+level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
   
}
$(".btn").on("click",function(){
    let userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name)
{
    let audio=new Audio(`./sounds/${name}.mp3`);
    audio.play();
}
function animatePress(currentColor)
{   
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){$("#"+currentColor).removeClass("pressed")},100);
}

$(document).on("keypress",function(){
    if(!started)
    {
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel)
{
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        console.log("success");
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        let audio2=new Audio("./sounds/wrong.mp3");
        audio2.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Wrong Answer, Press a key to Restart");
        startOver();
    }
}

function startOver()
{
    level=0;
    started=false;
    gamePattern=[];
}