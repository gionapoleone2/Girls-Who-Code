//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var theThroneOfGlassScore = 0;
var theMazeRunnerScore = 0;
var theSelectionScore = 0;
var theSoundAndTheFuryScore = 0;


//#TODO: Use the DOM to create variables for the quiz questions. //basically just connecting the HTML identifies with the JavaScript spreadsheet, so that these variables can be used here.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//getting the h2 "You should read..." from the HTML file and storing it as a variable in this Javascipt file
var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables. Bascially is a button function: when the variable button is clicked, do ___ function. The function details are outlined in the next step, though, and can be personalized. 
q1a1.addEventListener("click", theSelection);
q1a2.addEventListener("click", theThroneOfGlass);
q1a3.addEventListener("click", theSoundAndTheFury);
q1a4.addEventListener("click", theMazeRunner);

q2a1.addEventListener("click", theMazeRunner);
q2a2.addEventListener("click", theSoundAndTheFury);
q2a3.addEventListener("click", theThroneOfGlass);
q2a4.addEventListener("click", theSelection);

q3a1.addEventListener("click", theSoundAndTheFury);
q3a2.addEventListener("click", theSelection);
q3a3.addEventListener("click", theThroneOfGlass);
q3a4.addEventListener("click", theMazeRunner);


restart.addEventListener("click", restartQuiz);


//#TODO: Define quiz functions here (AKA what the button does once you press it)



function theSelection(){
  
  theSelectionScore +=1;
  //so every time this function is used, it increases the counter by 1
questionCount +=1;
  alert("The Selection Score went up!");
  
  //how do we know when to end the quiz and show results? thats what the questionCount variable is for!
 
  if (questionCount >=3){
  
 updateResult();
  
}
  
}

function theThroneOfGlass(){
  
  theThroneOfGlassScore +=1;
  //so every time this function is used, it increases the counter by 1
questionCount +=1;
  alert("The Throne of Glass Score went up!");
  
  if (questionCount >=3){
  
 updateResult();
  
}
}

function theSoundAndTheFury(){
  
  theSoundAndTheFuryScore +=1;
  //so every time this function is used, it increases the counter by 1
questionCount +=1;
  alert("The Sound and the Fury Score went up!");
  
  if (questionCount >=3){
  
  updateResult();
  
}
}

function theMazeRunner(){
  
  theMazeRunnerScore +=1;
  //so every time this function is used, it increases the counter by 1
questionCount +=1;
  alert("The Maze Runner Score went up!");
  
  if (questionCount >=3){
  
  updateResult();
  
}
  
}


function updateResult(){
  
  if (theThroneOfGlassScore >= 2){
     
    result.innerHTML = "You should read... The Throne Of Glass Series by Sarah J. Maas!";
  }
  
  else if (theMazeRunnerScore >=2){
     result.innerHTML = "You should read... The Maze Runner Series by James Dashner!";
  }
  
 else  if (theSelectionScore >= 2){
     result.innerHTML = "You should read... The Selection Series by Kiera Cass!";
  }
  
 else  if (theSoundAndTheFuryScore >=2) {
     result.innerHTML = "You should read... The Sound and the Fury by William Faulkner!";
  }
  
  else {
     result.innerHTML = "Hmm... It seems like you are a very diverse reader, and are difficult to impress! Try taking the quiz again for a more specific recommendation. ";
  }
  
  
}


function restartQuiz(){
  
var questionCount = 0;
var theThroneOfGlassScore = 0;
var theMazeRunnerScore = 0;
var theSelectionScore = 0;
var theSoundAndTheFuryScore = 0;
  
  result.innerHTML = "You should read..."
}



//EXTENSIONS - disable multiple answer choices being chosen 