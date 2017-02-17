var cbutton = document.getElementById("circle"); 
var dbutton = document.getElementById("dvd");
var sbutton = document.getElementById("stop");
var c = document.getElementById("canvas");
var rid;

var clear = function(){
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);	
}

var stop = function(){
    window.cancelAnimationFrame(rid);
}

var animate_dot = function(){
    var r = 0;
    var inc = true;
    window.cancelAnimationFrame(rid); // ensures only 1 instance of circle runs
    var circle = function(){
	clear();
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.arc(250,c.height/2,r,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if(r>=250){
	    inc = false;
	}else if(r<=0){
	    inc = true;
	}
	if(inc){
	    r++;
	}else{
	    r--;
	}
	rid = window.requestAnimationFrame( circle );
    };
    circle();
};

var animate_dvd = function(){
    var x = 0;
    var y = 0;
    var right = true;
    var down = true;
    window.cancelAnimationFrame(rid); 
    var dvd = function(){
	clear();
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.fillRect(x,y,75,50);
	rid = window.requestAnimationFrame( dvd );
	if(x >= 425){
	    right = false;
	}else if(x<=0){
	    right = true;
	}
	if(right){
	    x++;
	}else{
	    x--;
	}
	if(y >= 450){
	    down = false;
	}else if(y <= 0){
	    down = true;
	}
	if(down){
	    y++;
	}else{
	    y--;
	}
    };
    dvd();
};

cbutton.addEventListener('click',animate_dot);

dbutton.addEventListener('click',animate_dvd);

sbutton.addEventListener("click", stop);
