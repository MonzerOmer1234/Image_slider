// Select Images
let images = document.querySelectorAll(".slider-container img");
var sliderContainer = Array.from(images);
// Number of Slides
var slidesCount = sliderContainer.length;
// Set Current Slide
var currentSlide = 1;
// Slide Number String Element
var slideNumberElement = document.getElementById("slide-number");
// Previous And Next Buttons
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("prev");

// Create Paginations Ul
var paginationElement = document.createElement("ul");
// Set Id On The Created Ul
paginationElement.id = "pagination-ul";
// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
  //    Create Pagination Li
  let paginationItem = document.createElement("li");
  //   Set Custom Attribute in Li
  paginationItem.setAttribute("data-index", i);
  //   Set Item Content
  paginationItem.appendChild(document.createTextNode(i));
  //   Append Items in The Ul
  paginationElement.appendChild(paginationItem);
}
// Append The Ul To The Pagination Span
document.getElementById("paginations").appendChild(paginationElement);
//  Get The Ul
var createdPaginationUl = document.getElementById("pagination-ul");
// Set Paginations Bullets
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for(var i = 0 ; i < paginationBullets.length ; i++){
     paginationBullets[i].onclick = function(){
        currentSlide = Number(this.getAttribute('data-index'))
        theChecker()
     }
}
// Trigger The Checker Function
theChecker();
// Next Slide Function
function nextSlide() {
  currentSlide++;
  theChecker()
}
// Previous Slide Function
function prevSlide() {
  currentSlide--;
  theChecker()
}
nextButton.onclick = nextSlide;
previousButton.onclick = prevSlide;
// The Checker Function
function theChecker() {
  // Set The Slide Number
  slideNumberElement.textContent = `Slide ${currentSlide} of ${slidesCount}`;
  //   Remove All Active Classes
  removeAllActive();
  // Set Active Class On Current Slide
  images[currentSlide - 1].classList.add("active");
  // Set Active Class On Pagination Item
  createdPaginationUl.children[currentSlide - 1].classList.add("active");
}
// Remove Active Class From Bullets And Images
function removeAllActive() {
  images.forEach((img) => img.classList.remove("active"));
  // Loop Through The Bullets
  paginationBullets.forEach((bullet) => bullet.classList.remove("active"));

  //  Check if Current Slide is The First
  if (currentSlide === 1) {
    // Add Disabled Class To previous Button
    previousButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Previous Button
    previousButton.classList.remove("disabled");
  }
  //  Check if Current Slide is The Last
  if (currentSlide === slidesCount) {
    // Add Disabled Class To Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}
