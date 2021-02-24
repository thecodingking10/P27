class Ball{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1, 
            friction:0,
            density:0.8
        }
    
        this.body = Bodies.circle(x,y,r, options);
    
        World.add(world,this.body)
    } 

    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 20,20)
    }
}