class Slingshot {

    constructor(x, y, bodyA, pointB) {
        var options = {
                bodyA: bodyA, 
                pointB: pointB,
                stiffness: 0.04,
                length: 10
        }

        this.x = x
        this.y = y

        this.pointB = pointB
        this.sling = Constraint.create(options); 

        this.body.sling1 = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/sling1.png");
        World.add(world, this.sling1);

        this.body.sling2 = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/sling2.png");
        World.add(world, this.sling2);

        this.body.sling3 = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/sling3.png");
        World.add(world, this.sling3);

        // this.image = loadImage("sprites/sling1.png")

        // this.sling2 = Constraint.create(options); 
        // this.image = loadImage("sprites/sling2.png")

        // this.sling2 = Constraint.create(options); 
        // this.image = loadImage("sprites/sling2.png")
        World.add(world, this.sling);
    }

    display() {
        if (this.sling1.bodyA) {
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }

        push();
        translate(this.body.sling1.position.x, this.body.sling1.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        push();
        translate(this.body.sling2.position.x, this.body.sling2.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        push();
        translate(this.body.sling3.position.x, this.body.sling3.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    fly() {
        this.sling1.bodyA = null
    }

}
