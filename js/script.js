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

<<<<<<< HEAD
=======

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
>>>>>>> 8c50eaf72cc5145f1c0645a17e82f90ebe5312f6
