/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

// ===============================
// Dark / Light Mode Toggle
// ===============================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });

    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
    // Skills Bar Animation
window.addEventListener('load', () => {
    const skills = document.querySelectorAll('.progress span');
    
    skills.forEach(span => {
        const width = span.getAttribute('data-width');
        span.style.width = width + '%';
    });
});
}


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (href === "#") {
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        const nav = document.querySelector("nav ul");
        if (nav) {
            nav.classList.remove("active");
        }
    });
});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-up, .zoom-in").forEach(el => {
    observer.observe(el);
});

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector("textarea");

        if (!name.value.trim()) {
            alert("Please enter your name.");
            name.focus();
            return;
        }

        if (!email.value.trim()) {
            alert("Please enter your email.");
            email.focus();
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email.");
            email.focus();
            return;
        }

        if (!message.value.trim()) {
            alert("Please enter your message.");
            message.focus();
            return;
        }

        alert("Message sent successfully!");

        this.reset();

    });

}

// ===============================
// Certificate Image Preview
// ===============================

document.querySelectorAll(".certificate-card img").forEach(img => {

    img.addEventListener("click", () => {

        const popup = window.open("");

        popup.document.write(`
            <html>
            <head>
                <title>Certificate</title>
                <style>
                    body{
                        margin:0;
                        background:#000;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        height:100vh;
                    }
                    img{
                        max-width:95%;
                        max-height:95%;
                    }
                </style>
            </head>
            <body>
                <img src="${img.src}">
            </body>
            </html>
        `);

    });

});

// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [
        "AI & Data Science Student",
        "Frontend Developer",
        "Python Programmer",
        "Web Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, charIndex++);
        } else {
            typingElement.textContent =
                currentWord.substring(0, charIndex--);
        }

        if (!deleting && charIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

console.log("Portfolio Loaded Successfully!");