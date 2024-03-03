//GUESS A NUMBER GAME
let number=Math.floor((Math.random()*100)+1);
let chances=0;
while(true){
  let guess_num=parseInt(prompt("Guess the number: "));
  if(guess_num>number){
    console.log("Your guessed number is greater than actual number");
    console.log("Try Again");
    chances++;
  }
  else if(guess_num<number)
  {
    console.log("Your guessed nunber is lesser than actual number");
    console.log("Try Again");
    chances++;
  }
  else
  {
    break;
  }
}
let score=100-chances;
console.log("Score: "+score);
console.log("Game Over");