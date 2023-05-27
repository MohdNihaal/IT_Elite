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
<p>Beyond the positive impact on recipients, blood donation can also have health benefits for the donors themselves. Regular blood donation stimulates the body to produce fresh blood cells, promoting the maintenance of good cardiovascular health and reducing the risk of certain diseases. Additionally, the pre-donation screening process allows donors to receive a basic medical check-up, providing insights into their overall health status.</p>
=======
<<<<<<< HEAD
=======

>>>>>>> d61c21883519a01a3305e7bf9cbc30128205e746
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