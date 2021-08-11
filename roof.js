class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{

		var groundPos1=this.body.position;		

		push()
		translate(groundPos1.x, groundPos1.y);
		rectMode(CENTER)
		
		fill(133,94,66)
		rect(0,-150,17,300);
	    pop()
			
		var groundPos=this.body.position;		

		push()
		translate(groundPos.x, groundPos.y);
			
		rectMode(CENTER)
		
		fill(133,94,66)
		rect(0,0,this.w, this.h);
			
		pop()
	
	}

}