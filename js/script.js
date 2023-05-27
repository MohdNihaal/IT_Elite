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

