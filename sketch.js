var canvas;
var gameState;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  
  database = firebase.database();
  
  canvas = createCanvas(850,400);

  

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
