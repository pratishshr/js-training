// // Main application Class

// function BoxCollision(elementId) {

//   var element = document.getElementById(elementId);

//   this.init = function () {
//     var container = new Container();
//     var boxes = [];
//     container.create();

//     var box = new Box();
//     box.create();
//     boxes.push(box);

//     var box2 = new Box();
//     box2.create();
//     box2.setPosition(300, 300);
//     boxes.push(box2);

//     container.append(box.element);
//     container.append(box2.element);

//     element.appendChild(container.element);

//     var animator = new Animator(boxes, container);
//     animator.animate();
//   }
// }

// var boxCollision = new BoxCollision('box-collision');

// boxCollision.init();

var container = document.getElementById('box-collision');

for (var i = 0; i < 10; i++) {
  var button = document.createElement('button');
  button.innerText = i;

  // IIFE ( Immediately invoked functional expression)
  // Closure
  button.addEventListener('click', function (i) {
    return function () {
      console.log(i);
    }
  }(i));

  container.appendChild(button);
}

