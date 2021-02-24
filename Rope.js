class Rope{
    constructor(bodyA,bodyB,x, y){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB
           
        }
        this.x = x
        this.y = y
        this.chain = Constraint.create(options)
    
        World.add(world,this.chain)
    } 

    display(){
        var posA = this.chain.bodyA.position 
        strokeWeight(3);
        line(posA.x + this.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}