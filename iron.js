class Iron{
	constructor(x,y,width,height)
	{
		var options = {
			restitution : 0.8,
			friction : 3,
			density : 30
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
		rectMode(CENTER)
		rect(0,0,this.width,this.height)
			pop()
	}

}