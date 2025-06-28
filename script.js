window.onscroll = function () {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block"; // Show button when user scrolls down
    } else {
        btn.style.display = "none"; // Hide button when user is at the top
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}


gsap.registerPlugin(ScrollTrigger);

// Hero content fade-in from left
gsap.from(".hero-content-sec", {
    scrollTrigger: ".hero-content-sec",
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: "power3.out"
});

// Hero content fade-in from left
gsap.from(".hero-content-sec1", {
    scrollTrigger: ".hero-content-sec1",
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "power3.out"
});

// About content fade-in from right
gsap.from(".about-content-sec", {
    scrollTrigger: ".about-content-sec",
    opacity: 0,
    x: 100,
    duration: 1.2,
    ease: "power3.out"
});

// 
gsap.utils.toArray(".box").forEach((box, i) => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 85%", // when box top hits 85% of viewport
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.7,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: i * 0.1 // optional stagger
    });
});

// Animate each .box1 (education cards) individually
gsap.utils.toArray(".box1").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.2
    });
});


// Project cards fade-in
gsap.from(".project-sec .card", {
    scrollTrigger: ".project-sec",
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.3
});

// Contact form slide-in
gsap.from(".contact-form", {
    scrollTrigger: ".contact-sec",
    opacity: 0,
    x: 100,
    duration: 1
});

