// Get the video element
const video = document.getElementById('myVideo');

// Set up the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the video is visible in the viewport
    if (entry.isIntersecting) {
      // Play the video
      video.play();
    } else {
      // Pause the video if it's not visible
      video.pause();
    }
  });
});

// Start observing the video element
observer.observe(video);
var speed = -10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr("nbr");
}
const hoverElement = document.getElementById("hover-element");

hoverElement.onmouseover = function() {
  // Your function code here
  incEltNbr("nbr");
};


incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/


const observerhi = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)  
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observerhi.observe(el))


function redirect() {
  // Prevent the default form submission
  event.preventDefault();

  // Redirect to a new URL
  window.location.href = "http://127.0.0.1:5500/";
}

var myDiv = document.getElementById("myDiv");
myDiv.addEventListener("click", function() {
  window.location.href = "http://127.0.0.1:5500/";
});
