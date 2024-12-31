document.addEventListener("DOMContentLoaded", function() {
    const services = ["Car Maintenance", "Bike Maintenance", "Spare Parts"]; // Step 1: Declare services
    let index = 0; // Step 2: Initialize index

    function displayService() {
        if (index < services.length) {
            const serviceDisplay = document.getElementById('serviceDisplay');
            if (!serviceDisplay) return; 

            const service = services[index];
            let charIndex = 0; // Initialize character index

            // Create a new h1 element for the current service
            const newServiceElement = document.createElement('h1');
            newServiceElement.style.fontWeight = 'bold'; // Make text bold
            serviceDisplay.appendChild(newServiceElement); // Append new element to display

            // Function to type out the service name
            function typeService() {
                if (charIndex < service.length) {
                    newServiceElement.innerHTML += service.charAt(charIndex); // Add one character at a time
                    charIndex++;
                    setTimeout(typeService, 50); // Type next character after a delay
                } else {
                    setTimeout(() => {
                        // Add dual breaks before displaying the next service
                        serviceDisplay.appendChild(document.createElement('br'));
                        serviceDisplay.appendChild(document.createElement('br'));
                        newServiceElement.classList.remove('show'); // Hide service after typing
                        index++;
                        setTimeout(displayService, 300); // Show next service after a delay
                    }, 1000); // Keep the service displayed for 2 seconds
                }
            }

            newServiceElement.classList.add('show'); // Show service
            typeService(); // Start typing the service name
        }
    }

    displayService(); // Start displaying services
});