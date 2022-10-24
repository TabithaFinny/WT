$(document).ready(function(){

    var betCar;
    $('.betCar').click(function(){
    betCar=(this).value;
    $('#raceButton').show();
    })
    
    
    
    
    var carBlueTime = (Math.floor((Math.random() * 4) +1)) * 1000;
    var carRedTime = (Math.floor((Math.random() * 4) +1)) * 1000;
    
    var carWidth = $('#carBlue').width();
    var raceTrackWidth = screen.width - carWidth;
    
    $('#raceButton').click(function(){
    $(this).addClass('animated hinge');
    
    $('#carBlue').delay(1000).animate({
    left:raceTrackWidth
    },carBlueTime);
    
    $('#carRed').delay(1000).animate({
    left:raceTrackWidth
    },carRedTime);
    
    
    
    setTimeout(function() {
    
    $('#result').show();
    
    if(carBlueTime > carRedTime)
    {
    
    if(betCar == "red"){
    $('#output').html("Red Car Wins !  <br> ");
    }
    else{
    $('#output').html("Red Car Wins ! <br>");
    }
    
    } 
    else
    {
    
    if(betCar == "blue"){
    $('#output').html("Blue Car Wins !");
    }
    else{
    $('#output').html("Blue Car Wins !  <br>");
    }
    
    }
    }, 5000);
    
    
    
    });
    
    
    });
