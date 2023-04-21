let tog = document.getElementById("toggole");
let links = document.getElementById("links");
tog.onclick = function () {
    if (links.classList.contains("show")) {
        links.classList.remove("show");
    } else {
        links.classList.add("show")
    }
}
////////////////////////////////////
// Select All Images
var Images = Array.from(document.querySelectorAll(".img-container img"));
// The Number Of Images
var ImagesNumber = Images.length;
// The Counter
var Counter = 1;
// The Slide Number 
var SlideNumberElement = document.getElementById('slide-number');
// Previous And Next Button 
var NextButton = document.getElementById("next");
var PreviousButton = document.getElementById("prev");
// Onclick On Buttons
NextButton.onclick = next;
PreviousButton.onclick = previous;
// Creating The Main Ul Element 
var UlElement = document.createElement("ul");
UlElement.setAttribute("id", "Main-ul");
// Creating li Elements
for (var i = 1; i <= ImagesNumber; i++) {
    var ListItems = document.createElement("li");
    // Set Data Custom
    ListItems.setAttribute("data-num", i);
    // Set Item Content
    ListItems.appendChild(document.createTextNode(i));
    // Gave The Childern To The Father
    UlElement.appendChild(ListItems);
}
// Adding To The Page
document.getElementById("indicators").appendChild(UlElement);
// Get The Ul 
var TheNewUl = document.getElementById("Main-ul");
// The Bullets li
var Bullets = document.querySelectorAll("#Main-ul li");
for (let i = 0; i < Bullets.length; i++) {
    Bullets[i].onclick = function () {
        Counter = parseInt(this.getAttribute("data-num"))
        Checker();
    }
}
Checker();
// Next Slide Function 
function next() {
    if (NextButton.classList.contains("disabled")) {
        return false;
    } else {
        Counter ++
        Checker();
    }
}
// Previous Slide Function 
function previous() {
    if (PreviousButton.classList.contains("disabled")) {
        return false;
    } else {
        Counter --
        Checker();
    }
}
// The Checker Function
function Checker() {
    SlideNumberElement.textContent = 'Slide ' + (Counter) + ' of ' + (ImagesNumber);
    Remove();
    // Set Class Active
    Images[Counter - 1].classList.add("active");
    // Set Active Class On Bullets
    TheNewUl.children[Counter - 1].classList.add("active");
    // Check If The Current Slide Is The First
    if (Counter == 1) {
        PreviousButton.classList.add("disabled");
    } 
    else {
        PreviousButton.classList.remove("disabled");
    }
    if (Counter == ImagesNumber) {
        NextButton.classList.add("disabled");
    } 
    else {
        NextButton.classList.remove("disabled");
    }
}
// Remove All Active Classes
function Remove() {
    // Images
    Images.forEach((img) => {
        img.classList.remove("active");
    });
    // Bulltes
    Bullets.forEach((Bul) => {
        Bul.classList.remove("active");
    });
};