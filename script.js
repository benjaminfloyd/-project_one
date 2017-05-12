$( document ).ready(function(){

var points = 0;
var reset = 0;
$('zero').onclick = reset;
// 100
$('#html100c').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "html100c";
  $(".html100c").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
// 200
$('#html200c').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "html200c";
  $(".html200c").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
   // 300
$('#html300c').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "html300c";
  $(".html300c").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
   // 400
$('#html400c').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "html400c";
  $(".html400c").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);

   // CSS100
   $('#css100d').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "css100d";
  $(".css100d").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
     // CSS200
   $('#css200a').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "css200a";
  $(".css200a").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
       // CSS300
   $('#css300a').click(function(){
    points += 300;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "css300a";
  $(".css300a").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });
       // CSS400
   $('#css400a').click(function(){
    points += 400;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "css400a";
  $(".css400a").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });

       // jQuery100
   $('#jQuery100a').click(function(){
    points += 100;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "jQuery100a";
  $(".jQuery100a").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });

        // jQuery200
   $('#jQuery200a').click(function(){
    points += 200;
  $('#number').text(points);
  console.log("points " + points )
});
var correctAnswer = "jQuery200a";
  $(".jQuery200a").on("click" , function(){
   if(this.id === correctAnswer){
    alert("correct");
    console.log('correct answer, should be alert');
   }else{
    alert("incorrect");
    //console.log('incorrect answer, should be alert');
   }
   console.log(this.id);
  });

// //////reset button
// function reset(points) {
//   points = 0;
//   $('#number').text(points);
// }
// //////correct functions
// function add100() {

// }
// function add200() {
//   points = points + 200;
//   $('#number').text(points);
// }
// function add300() {
//   points = points + 300;
//   $('#number').text(points);
// }
// function add400() {
//   points = points + 400;
//   $('#number').text(points);
// }
// ///////incorrect functions
// function add500() {
//   points = points + 500;
//   $('#number').text(points);
// }
// });



