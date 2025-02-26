// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// Cursor Interaction
var crse = document.querySelector("#cursor");
var crseblur = document.querySelector("#cursor-blur");

document.addEventListener('mousemove', function(dets) {
  crse.style.left = dets.x - 12 + "px";
  crse.style.top = dets.y - 10 + "px";
  crseblur.style.left = dets.x - 150 + "px";
  crseblur.style.top = dets.y - 150 + "px";
});

// Cursor Hover Effects
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crse.style.transform = 'scale(3.5)';
    crse.style.border = "1px solid #fff";
    crse.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function() {
    crse.style.transform = 'scale(1)';
    crse.style.border = "0px solid #95C11E";
    crse.style.backgroundColor = "#95C11E";
  });
});

// GSAP Animations with ScrollTrigger

// Navbar Scroll Animation
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Main Section Scroll Animation
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -40%",
    end: "top -80%",
    scrub: 2,
  },
});

// About Us Section Animations
gsap.from("#about-us img, #about-us-in", {
  y: 60,
  x: 120,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 190%",
    end: "bottom 30%",
    scrub: 3,
  },
});

// Card Section Animations
gsap.from(".card", {
  scale:0.8,
  duration: 0.5,
  stagger:1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 50%",
    end: "top 50%",
    scrub:1,
  }
});

// Colon Animation on Scroll
gsap.from("#colon1", {
  y: -70,
  x: -70,
  duration: 1,
  stagger: 3,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 50%",
    end: "top 50%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 30%",
    scrub: 4,
  },
});

// Page 4 H1 Animation
gsap.from("#page4 h1", {
  y: 70,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 1,
  },
});


// commments changing:
// Select the paragraph where the comment is displayed
var commentParagraph = document.querySelector("#page3 p");

// Define an array of comments with emojis
var comments = [
  "I absolutely love the adventure golf here! 🏌️‍♂️⛳ It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses make it more fun as you can complete both and compare your scores! 😄",
  
  "This place just keeps getting better! Every time I visit, there's something new to enjoy. 🎉 Whether it's the challenging new holes 🕳️ or just the friendly atmosphere 😊, I'm never disappointed. Come for the fun, stay for the laughs! 😜",
  
  "Amazing experience at the adventure golf! 🌟 The layout is fantastic, and I love the unique theme for each hole 🦖. It's always a blast trying to beat my personal best score 🏆. Definitely worth a visit! 🎯",
  
  "I always have such a great time here! 🌟 The variety of challenges in the course makes it exciting every time. Plus, the staff is super friendly and helpful. 👏 Everyone should check it out! 😍"
];

// Variable to keep track of the current comment index
var currentIndex = 0;

// Variable for the interval function
var commentInterval;

// Function to change the comment with fade effect
function changeComment() {
  // Fade out the current comment
  gsap.to(commentParagraph, { opacity: 0, duration: 0.5, onComplete: function() {
    // Update the content of the paragraph with the next comment in the array
    commentParagraph.textContent = comments[currentIndex];

    // Fade in the new comment
    gsap.to(commentParagraph, { opacity: 1, duration: 0.5 });
  }});

  // Move to the next comment in the array, or reset to the first comment if we're at the end
  currentIndex = (currentIndex + 1) % comments.length; // Loops back to the first comment
}

// Start changing comments every 5 seconds (5000 milliseconds)
function startChangingComments() {
  commentInterval = setInterval(changeComment, 2000);  // Adjust the time as needed
}

// Stop changing comments
function stopChangingComments() {
  clearInterval(commentInterval); // Stop the interval
}

// Start the comment change when the page loads
startChangingComments();

// Event listeners for hover to stop and resume the comment change
commentParagraph.addEventListener('mouseenter', stopChangingComments);  // Stop on hover
commentParagraph.addEventListener('mouseleave', startChangingComments); // Resume on hover leave




// Confetti effect triggered on page load
window.addEventListener('load', () => {
  // Confetti falling from top-left corner
  confetti({
    origin: { x: 0, y: 0 },  // Top-left (0 is left, 0 is top)
    particleCount: 200,
    angle: 320,                // Confetti will fall straight down
    spread: 70,                // No spread, just fall straight down
    gravity: 1.3,               // Falling effect
    scalar: 1,
  });

  // Confetti falling from top-right corner
  confetti({
    origin: { x: 1, y: 0 },  // Top-right (1 is right, 0 is top)
    particleCount: 200,
    angle: 190,                // Confetti will fall straight down
    spread: 70,                // No spread, just fall straight down
    gravity: 1.3,               // Falling effect
    scalar: 1,
  });
});



 