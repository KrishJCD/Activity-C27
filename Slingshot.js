class Slingshot
{
    constructor(bodyA,bodyB)
    {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:12,
            stiffness:0.04
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display()
    {
        var pos=this.slingshot.bodyA.position;
        var pos2=this.slingshot.bodyB.position;
        strokeWeight(4);
        line(pos.x,pos.y,pos2.x,pos2.y);
    }
}