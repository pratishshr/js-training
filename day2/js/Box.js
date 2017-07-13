function Box(x, y) {
  this.x = x || 200;
  this.y = y || 200;
  this.height = 100;
  this.width = 100;
  this.velocity = 10;
  this.color = 'blue';
  this.direction = 1;

  this.element;

  this.create = function () {
    this.element = document.createElement('div');

    this.setPosition(this.x, this.y);

    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.background = this.color;
  }

  this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }

  this.move = function () {
    this.x = this.x + (this.velocity * this.direction);

    this.element.style.left = this.x;
  }
}