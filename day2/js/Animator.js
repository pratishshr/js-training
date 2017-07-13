function Animator(boxes, container) {
  var intervalId;
  var that = this;
  this.boxes = boxes;
  this.container = container;

  this.animate = function () {
    intervalId = setInterval(function () {
      that.boxes.forEach(function (box) {
        that.move(box);
        that.checkWallCollision(box);
      });
    }, 1000 / 60);
  }

  this.move = function (box) {
    box.move();
  }

  this.checkWallCollision = function (box) {
    if ((box.x + box.width) >= container.width || (box.x <= 0)) {
      box.direction *= -1;
    }
  }
}