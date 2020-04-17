class Log extends BaseClass {
    constructor(x, y, width, angle) {
      super(x, y, 20, width, angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");
    }
  };
  