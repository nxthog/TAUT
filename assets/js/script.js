/* ==========================================================
   TAUT International Team
   Main JavaScript
========================================================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});

// Scroll To Top

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("active");

    } else {

        scrollBtn.classList.remove("active");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,17,31,.95)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(10,16,30,.70)";

        header.style.boxShadow = "none";

    }

});

// Counter Animation

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const speed = target / 100;

        let value = 0;

        const update = () => {

            value += speed;

            if (value < target) {

                counter.innerText = Math.floor(value);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const stats = document.querySelector(".statistics");

if (stats) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(stats);

}

// Theme Toggle

const themeBtn = document.getElementById("themeToggle");

let dark = true;

themeBtn.addEventListener("click", () => {

    dark = !dark;

    if (!dark) {

        document.body.style.background = "#f5f7fb";

        document.body.style.color = "#111";

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.style.background = "";

        document.body.style.color = "";

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// Close Menu

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// Active Navigation

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll("nav a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Gallery Animation

document.querySelectorAll(".gallery-grid img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08) rotate(1deg)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "";

    });

});

// Contact Form

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert("تم إرسال رسالتك بنجاح.");

        form.reset();

    });

}

// Logo Animation

const logo = document.querySelector(".hero-image img");

if (logo) {

    window.addEventListener("mousemove", e => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;

        const y = (window.innerHeight / 2 - e.clientY) / 40;

        logo.style.transform = `translate(${x}px, ${y}px)`;

    });

}

// Smooth Fade

const reveal = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.15

});

reveal.forEach(section => {

    revealObserver.observe(section);

});

// Current Year

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("%cTAUT International Team", "color:#0E72B8;font-size:22px;font-weight:bold;");

console.log("%cTogether, Reviving the Spirit of Teamwork", "color:#7B5BFF;font-size:14px;");
