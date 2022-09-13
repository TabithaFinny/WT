function change()
{   
  var div=document.getElementById('box');
  var bgcolor=document.getElementById('bgcolor').value;
  div.style.backgroundColor=bgcolor;

  var tcolor=document.getElementById('tcolor').value;
  div.style.color=tcolor;

  var tsize=document.getElementById('tsize').value;
  div.style.fontSize=tsize+"px";

  var width=document.getElementById('width').value;
  div.style.width=width+"px";

  var height=document.getElementById('height').value;
  div.style.height=height+"px";

  var border=document.getElementById('border').value;
  div.style.borderRadius=border+"%";
}

var car=null;
var timer=null;

function init(){
    car= document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';        //initial position of the car
}

function start(){
    // car.style.left=parseInt(car.style.left)+ 2 +"px";
    // timer=setTimeout(move,100);//recursive
    clearTimeout(timer)
    timer=setInterval(move,10)
}

function halt(){
    clearTimeout(timer);
}
function reset(){
  car= document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px'; 
}
function move(){
  console.log(car.style.left)
  if (parseInt(car.style.left) >= 1300){
      halt()
      danger()
  }
  car.style.left=parseInt(car.style.left)+2+"px";
}
function danger(){
  div = document.getElementById('box')
  div.backgroundColor = 'blue';
}
