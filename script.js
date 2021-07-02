/* .js files add interaction to your website */

/* fact gen */
var factList = [
"66% of prejudice incidents against AAPI population were verbal harassment.",/*0*/
"69% of prejudice incidents againts AAPI population occured in California.",/*1*/
"20% of prejudice incidents against AAPI population were shunning or avoidance.", /*2*/
"The most targeted ethnicity in the AAPI population was Chinese and Korean-Americans.",/*3*/
"10%-20% of republicans, democrats, and independents were somewhat concern with being around Asian descent."];/*4*/




var fact = document.getElementById("fact");

var mybutton = document.getElementById("mybutton");

var count= 0;

mybutton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

