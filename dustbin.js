class dustbin
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.trashcanWidth=200;
        this.trashcanHeight=310;
        this.wallThickness=25;
        this.angle=0;   
        
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.trashcanWidth, this.wallThickness, {isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.trashcanWidth/2, this.y-this.trashcanHeight/2, this.wallThickness, this.trashcanHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        

        this.rightWallBody=Bodies.rectangle(this.x+this.trashcanWidth/2, this.y-this.trashcanHeight/2, this.wallThickness, this.trashcanHeight, {isStatic:true})
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        World.add(world, this.bottomBody)
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);
        this.image = loadImage("Pasted Graphic.png")

    }
    display()
    {
            var posBottom=this.bottomBody.position;
            var posLeft=this.leftWallBody.position;
            var posRight=this.rightWallBody.position;

            

            push()
            translate(posLeft.x, posLeft.y);
            rectMode(CENTER)
            angleMode(RADIANS)
            rotate(this.angle)
            rect(0,0,this.wallThickness, this.trashcanHeight);
            pop()

            push()
            translate(posRight.x, posRight.y);
            rectMode(CENTER)
            angleMode(RADIANS)
            rotate(-1*this.angle)
            rect(0,0,this.wallThickness, this.trashcanHeight);
            pop()

            push()
            translate(posBottom.x, posBottom.y);
            imageMode(CENTER)
            angleMode(RADIANS)
            image(this.image, 0,-150,this.r+150, this.r)
            rect(0,0,this.trashcanWidth, this.wallThickness);
            pop()
            
    }

}
