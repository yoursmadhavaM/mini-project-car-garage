const headingText = "Get in Touch with Us"; // Updated heading text
const headingElement = document.querySelector("h1"); // Select the h1 element directly
let index = 0;
let isTyping = false; // Flag to prevent multiple calls

function typeHeading() {
    if (isTyping) return; // Prevent multiple calls
    isTyping = true; // Set flag to true

    if (index < headingText.length) {
        headingElement.textContent += headingText.charAt(index);
        index++;
        setTimeout(typeHeading, 200);
    }
}

// Start typing the heading
typeHeading();

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Thank you for your message! We will get back to you soon."); // Alert message
    document.getElementById("contactForm").reset(); // Reset the form
}