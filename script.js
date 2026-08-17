// Wedding Website JavaScript

// Navbar background on scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
        nav.style.background = "rgba(255, 255, 255, 1)";
        nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.98)";
        nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.08)";
    }
});

// Fade in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(30px)";
            setTimeout(() => {
                entry.target.style.transition = "all 0.8s ease-out";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll("section:not(.hero)").forEach(section => {
    observer.observe(section);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.rsvp-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            console.log('RSVP form submitted');
        });
    }
});