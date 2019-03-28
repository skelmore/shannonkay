
// hide destination 
// when wander button pressed 
// show suggestion
// hide wander button


$('#flashMessage').hide();
$('#wanderButton').click(function(){
const message = $('#flashMessage').val();
console.log(message);

$('#flashMessage')
.fadeIn(1000)
.delay(3000)
.fadeOut(); 
});
