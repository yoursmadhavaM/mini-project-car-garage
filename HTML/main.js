document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".text", {
        strings: ["Brake Repairs.", "Engine Repairs.", "Tire Repairs","Streering Repairs","Battery Repairs"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    const services = document.querySelectorAll('.service');
    
    if (services.length > 0) {
        services.forEach((service, index) => {
            setTimeout(() => {
                service.classList.add('visible');
            }, index * 300);
        });
    }
});