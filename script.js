game=()=>{
   taksound=()=>{
      let sound=new Audio('./sound.mp3');
      sound.play();

const player1=Math.floor(Math.random()*6)+1;
const player1dice =  `./images/dice${player1}.png`;
document.getElementById('checkme').setAttribute('src',player1dice)

const player2=Math.floor(Math.random()*6)+1;
const player2dice =  `./images/dice${player2}.png`;
document.getElementById('checkyou').setAttribute('src',player2dice)


if(player1>player2)
   {document.querySelector('h1').innerHTML="🎊Player1 Won:)🎊"}
else if(player1<player2)
{document.querySelector('h1').innerHTML="🎉Player2 Won:)🎉"}
else
{document.querySelector('h1').innerHTML="🎈DRAW:)"}

   }
}

