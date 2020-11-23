class Polygon{
    constructor(){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body = Bodies.circle(100, 300, 40, options);
        this.radius = 40;
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke("Yellow");
        fill(200,200,0);
        ellipse(pos.x,pos.y, this.radius, this.radius);
        pop();
    }
};