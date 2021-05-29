class drop{

constructor(x,y) {

    var options = {
        friction : 0.001,
        restitution : 0.01
    }

    this.raindrop = Bodies.circle(x,y,5,options)
    this.radius = 5;
    World.add(world, this.raindrop);

}

updateY(){     
    if(this.raindrop.position.y > height){

        Matter.Body.setPosition(this.raindrop, {x:random(0,400), y:random(0,400)})
    }
}

showDrop(){
    fill("blue")
    ellipseMode(CENTER);
    ellipse(this.raindrop.position.x,this.raindrop.position.y,this.radius,this.radius);
}
}

