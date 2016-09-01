$(function() {

var $button = $('.show_all');
var $fInput = $('.ftooltip');
var $sInput = $('.stooltip');
var $tInput = $('.ttooltip');
var $fName = $('.fname');
var $sName = $('.sname');
var $tName = $('.tname');

$button.on('click', function() {
	$fInput.animate({
		opacity: 100
	}, 1000)

    $sInput.animate({
		opacity: 100
	}, 1000)

	$tInput.animate({
		opacity: 100
	}, 1000)
});


$fName.hover(function() {
	$fInput.animate({
		opacity: 100
	}, 500)
},
 function() {
 	$fInput.animate({
 		opacity: 0
 	}, 500)
 });

$sName.hover(function() {
	$sInput.animate({
		opacity: 100
	}, 500)
},
 function() {
 	$sInput.animate({
 		opacity: 0
 	}, 500)
 });

$tName.hover(function() {
	$tInput.animate({
		opacity: 100
	}, 500)
},
 function() {
 	$tInput.animate({
 		opacity: 0
 	}, 500)
 });

$fName.on('focusin', function() {

    	$fInput.css("opacity", 100).fadeIn(1000);

});

$fName.on('focusout', function() {

    	$fInput.css("opacity", 0).fadeIn(1000);

});


$sName.on('focusin', function() {

    	$sInput.css("opacity", 100).fadeIn(1000);

});

$sName.on('focusout', function() {

    	$sInput.css("opacity", 0).fadeIn(1000);

});

$tName.on('focusin', function() {

    	$tInput.css("opacity", 100).fadeIn(1000);

});

$tName.on('focusout', function() {

    	$tInput.css("opacity", 0).fadeIn(1000);

});

});
