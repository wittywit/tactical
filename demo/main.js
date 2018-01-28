$( function() {
    $( "#player1" ).draggable();
  } );

$( function() {
    $( "#player2" ).draggable();
  } );
$( function() {
    $( "#player3" ).draggable();
  } );
$( function() {
    $( "#player4" ).draggable();
  } );
$( function() {
    $( "#player5" ).draggable();
  } );
$( function() {
    $( "#player6" ).draggable();
  } );
$( function() {
    $( "#player7" ).draggable();
  } );
$( function() {
    $( "#player8" ).draggable();
  } );
$( function() {
    $( "#player9" ).draggable();
  } );
$( function() {
    $( "#player10" ).draggable();
  } );
$( function() {
    $( "#player11" ).draggable();
  } );



//================= Player 2 ======================

$( function() {
    $( "#player01" ).draggable();
  } );

$( function() {
    $( "#player02" ).draggable();
  } );
$( function() {
    $( "#player03" ).draggable();
  } );
$( function() {
    $( "#player04" ).draggable();
  } );
$( function() {
    $( "#player05" ).draggable();
  } );
$( function() {
    $( "#player06" ).draggable();
  } );
$( function() {
    $( "#player07" ).draggable();
  } );
$( function() {
    $( "#player08" ).draggable();
  } );
$( function() {
    $( "#player09" ).draggable();
  } );
$( function() {
    $( "#player010" ).draggable();
  } );
$( function() {
    $( "#player011" ).draggable();
  } );

$( function() {
    $( "#ball" ).draggable();
  } );


/*====================== Saving Image Screenshot of the viewport =====================*/

$(document).ready(function(){

	
var element = $("#containment-wrapper"); // global variable
var getCanvas; // global variable
   

	$("#btn-Convert-Html2Image").on('click', function () {

html2canvas(element, {
	onrendered: function (canvas) {
		getCanvas = canvas;
	}
});
var imgageData = getCanvas.toDataURL("image/png");

// Now browser starts downloading it instead of just showing it

var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");

$("#btn-Convert-Html2Image").attr("download", "Tactical_pad_.png").attr("href", newData);
});

});






/*====================== Saving position of Players dragged in Local storage =====================*/



