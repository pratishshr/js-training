// Ecmascript 5
// Ecmascript 6

function Slider(elementId) {
  var that = this;
  var element = document.getElementById(elementId);

  this.intervalId;
  this.marginLeft = 0;

  // this chai ramrari padha
  this.init = function () {
    this.slide();
    this.addEvents();
  }

  this.addEvents = function () {
    element.addEventListener('pointerenter', that.stop);
    element.addEventListener('pointerleave', that.slide);
  }

  this.slide = function () {
    this.intervalId = setInterval(function () {
      element.style.marginLeft = that.marginLeft;
      that.marginLeft -= 10;
    }, 1000 / 60);
  }

  this.stop = function () {
    clearInterval(that.intervalId);
  }
}

var slider = new Slider('slider');

slider.init(asdf());

