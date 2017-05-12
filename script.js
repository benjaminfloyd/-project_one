$( document ).ready(function(){

var points = 0;
var reset = 0;
$('zero').onclick = reset;
// 100 Answers
$('#html100c').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "html100c";
  $("#html100col").on("click" , function(e){
    console.log(this.id === correctAnswer);
   if(e.target.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   } else {
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
});
// HTML 200
$('#html200b').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswerForHtml2000b = "html200b";
  $("#html200col").on("click" , function(e){
    console.log(this.id === correctAnswerForHtml2000b);
   if(e.target.id === correctAnswerForHtml2000b){
    alert("correct");
    console.log('correct answer, should be alert');
   } else {
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
});
// HTML 300
$('#html300b').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswerForHtml3000b = "html300b";
  $("#html300col").on("click" , function(e){
    console.log(this.id === correctAnswerForHtml3000b);
   if(e.target.id === correctAnswerForHtml3000b){
    alert("correct");
    console.log('correct answer, should be alert');
   } else {
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
});
// HTML 400
$('#html400b').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswerForHtml4000b = "html400b";
  $("#html400col").on("click" , function(e){
    console.log(this.id === correctAnswerForHtml4000b);
   if(e.target.id === correctAnswerForHtml4000b){
    alert("correct");
    console.log('correct answer, should be alert');
   } else {
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
});
// CSS 100
$('#CSS100b').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswerForCSS1000b = "html100b";
  $("#css100col").on("click" , function(e){
    console.log(this.id === correctAnswerForcss4000b);
   if(e.target.id === correctAnswerForcss1000b){
    alert("correct");
    console.log('correct answer, should be alert');
   } else {
    alert("incorrect");
    console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
});
  });



