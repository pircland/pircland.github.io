// DONT CHANGE THIS SECTION!!!!! IF YOU WANT TO EXPERIMENT YOU CAN ADD YOUR OWN JAVASCRIPT UP HERE BUT DON'T CHANGE WHAT'S BELOW PLEASE!








/////////////////////////
//below I'm adding an event listener so that when someone clicks on the on div with the class "your-name" div at the bottom of the headshot, a class is added to the *description* div called "description-apparent," and a class called "description-invisible" is removed. Because of the properties in the description-apparent class, when the div is assigned to this class, it becomes visible in the browser for 15 seconds. Because there is an animation property which, as I wrote it changes the opacity of the description div from 1 back to 0 — the divs with the description-apparent class become visible for 15s. //

var headshot = document.getElementsByClassName("headshot");
var description = document.getElementsByClassName("description");

//this is the function I call in "onclick" which is referred to in the HTML//
function showDescription() {

  console.log(event);
  var whoAmI = event.target.id;
  var containerDivChild = event.target.children;
  var containerGrandchild = event.target.lastElementChild.lastElementChild;

  for (let item of containerDivChild) {
    item.classList.add("headshot-flip");
    item.classList.remove(item.id + "-effect");
    setTimeout(function () {
      item.classList.remove("headshot");
    }, 500);
    containerGrandchild.classList.remove("description-invisible");
    containerGrandchild.classList.add("description-apparent");
  }
}

//below I'm adding an event listener so that when the animation ends, the div is re-assigned the class of "description-invisible" and the "description-apparent" class is removed//

for (let item of description) {
  item.addEventListener("animationend", function () {
    item.classList.remove("description-apparent");
    item.classList.add("description-invisible");
    console.log("ended!");
  });
}

for (let item of headshot) {
  item.addEventListener("animationend", function () {
    item.classList.add(item.id + "-effect");

    item.classList.remove("headshot-flip");
    item.classList.add("headshot");
  });
}