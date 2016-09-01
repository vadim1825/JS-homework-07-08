$(function() {
    
    var $buttonOne = $('.first');

    var $buttonTwo = $('.second');

    var $buttonThree = $('.third');

    var $paragraphOne = $('.pOne');

    var $paragraphTwo = $('.pTwo');

    var $paragraphThree = $('.pThree');

    var $paragraphFour = $('.pFour');

    var $window = $('.window')

    $buttonOne.on('click', function(){
        $paragraphOne.removeClass('invisible');
        $paragraphTwo.addClass('invisible');
        $paragraphThree.addClass('invisible');
        $paragraphFour.addClass('invisible');
        $buttonOne.addClass('blue_button');
        $buttonTwo.removeClass('blue_button');
        $buttonThree.removeClass('blue_button');
    });

    $buttonTwo.on('click', function(){
        $paragraphTwo.removeClass('invisible');
        $paragraphOne.addClass('invisible');
        $paragraphThree.addClass('invisible');
        $paragraphFour.addClass('invisible');
        $buttonOne.removeClass('blue_button');
        $buttonTwo.addClass('blue_button');
        $buttonThree.removeClass('blue_button');
    });

    $buttonThree.on('click', function(){
        $paragraphThree.removeClass('invisible');
        $paragraphFour.removeClass('invisible');
        $paragraphOne.addClass('invisible');
        $paragraphTwo.addClass('invisible');
        $window.addClass('scroll');
        $buttonOne.removeClass('blue_button');
        $buttonTwo.removeClass('blue_button');
        $buttonThree.addClass('blue_button');
    });



});