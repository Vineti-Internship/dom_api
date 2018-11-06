function change(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
}

function dblclick(event) {
  console.log(event.target);
  console.log('double clicked');
}

function h1ClickHandler(event) {
  event.stopPropagation();
  console.log(event.currentTarget);
}

function bodyClickHandler(event) {
  console.log(event.currentTarget);
}

function keyDown(e) {
  console.log(e.type);
  return false;
}

function keyUp(e) {
  console.log(e.type);
}

function keyPress(e) {
  console.log(e.type);
}