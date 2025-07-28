// example -1

document
  .getElementById("changeTextButton1")
  .addEventListener("click", function () {
    // Change the text of the paragraph when button is clicked
    document.getElementById("myParagraph1").textContent =
      "Sold to LSG for 27CR!";
  });

// example -2
document
  .getElementById("changeTextButton2")
  .addEventListener("click", function () {
    // Highlight the first city in the list
    const firstCity = document.querySelector("#myList2 li");
    if (firstCity) {
      firstCity.classList.add("highlight");
    }
  });

// example -3
document
  .getElementById("changeTextButton3")
  .addEventListener("click", function () {
    // Change the text of the paragraph when button is clicked
    document.getElementById("myParagraph3").textContent =
      "Change order to Expresso!";
    myParagraph3.style.backgroundColor = "yellow";
    myParagraph3.style.padding = "10px";
    myParagraph3.style.color = "black";
  });

// example -4
document
  .getElementById("changeTextButton4")
  .addEventListener("click", function () {
    document
      .getElementById("myList4")
      .appendChild(document.createElement("li")).textContent = "Egg";
  });

// example -5
document
  .getElementById("changeTextButton5")
  .addEventListener("click", function () {
    document.getElementById("myList5").lastElementChild.remove();
  });

// example -6
document
  .getElementById("changeTextButton6")
  .addEventListener("mouseover", function () {
    alert("Mouse is over the button!");
  });

// example -7
document.getElementById("myList7").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    // Remove highlight from all items
    Array.from(this.children).forEach((li) => li.classList.remove("highlight"));
    // Add highlight to the clicked item
    event.target.classList.add("highlight");
  }
});

// example -8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Thank you! Your feedback: "${feedback}" has been submitted.`;
  });

// example -9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

/// example -10
document
  .getElementById("changeTextButton10")
  .addEventListener("click", function () {
    // Toggle the highlight class on the paragraph
    document.getElementById("myParagraph10").classList.toggle("highlight");
  });
