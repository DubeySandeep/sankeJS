//This represtents the SNAKE////////////////////////////////
function snake(){
	vel = 5;
	this.x = [0,0];           //Position X
	this.y = [0,0];           //Position Y
	this.dx = 1*vel;      //Velocity along X
	this.dy = 0*vel;      //Velocity along Y
	this.size = 1;		  //Size of snake		
	//Draw the snake
	this.drawn = function(){
				for(i=0;i<this.size;i++)
				{
					fill(43);
					rect(this.x[i],this.y[i],6,6);
				}
				x1 = this.x[i];y1=this.y[i];
				x2 = x1 + Math.abs(this.dy); y2 = y1 + Math.abs(this.dx);
				x3 = x1 + (this.dy/vel)*3 - this.dx*2;y3 = y1 + (this.dx/vel)*3 - this.dy*2; 
				triangle(x1,y1,x2,y2,x3,y3);
							
		}
	//Motion helps in determining the Direction  
	this.motion = function() {
		if (keyCode == UP_ARROW) {
				this.dy = -1*vel;
				this.dx = 0;
			}
		else if (keyCode == DOWN_ARROW) {
				this.dy = 1*vel;
				this.dx = 0;
			}
		else if (keyCode == RIGHT_ARROW) {
				this.dy = 0;
				this.dx = 1*vel;
			}
		else if (keyCode == LEFT_ARROW) {
				this.dy = 0;
				this.dx = -1*vel;
			}	
		}

	/*this.adder = function(){
		this.x.push(this.x[this.size] - this.dx);
		this.y.push(this.y[this.size] -this.dy);
}*/

	this.update = function(){
		for(i = this.size ;i > 0; i--)
		{
			this.x[i] = this.x[i-1];
			this.y[i] = this.y[i-1];
		}
}	
	//This packs the entire data of snake for Debugging via console
	this.packet = function(){
		print(" Position: (",this.x[0],",",this.y[0],")\n",
			  "Velocity: (",this.dx,",",this.dy,")\n",
			  "Size: ",this.size,"\n");
		}
	
}

/////////////////////////////////////////////////////////////////
function check() {
	s.x[0] += s.dx*factor;
    s.y[0] += s.dy*factor;
    s.x[0] %= x_pix;
    if(s.x[0] < 0)
        s.x[0] = x_pix;
	s.y[0] %= y_pix;
    if(s.y[0] < 0)
        s.y[0] = y_pix;
	
	if(s.x[0] == f.x & s.y[0] == f.y )
		return 1;
	else 
		return 0;
}
//This represtents the FRUIT////////////////////////////////
function fruit(){
	this.x = 100;
	this.y = 100;
	this.drawn = function(){
			fill(255,0,0);
			rect(this.x,this.y,5,5);
		}
	this.packet = function(){
		print(" Position: (",this.x,",",this.y,")\n");
		}
}


