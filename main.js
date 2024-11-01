// Get elements for tabs and sidemenu
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

// Function to open a specific tab
function opentab(tabname) {
    // Remove active class from all tab links and contents
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active classes to the selected tab and content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

// Ensure nav remains visible on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.style.display = "block";
    }
});

window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) { // Check if Ctrl is pressed
        const img = document.querySelector('.about-col-2 img');
        const p = document.querySelector('.about-col-1 p');
        const currentZoom = Math.round(window.devicePixelRatio * 100);

        // Zoomed in (above 100%) - apply scaled-down class
        if (currentZoom > 110) {
            img.classList.add('scaled-down');
            img.classList.remove('scaled-up');
            p.classList.add('scaled-down');
            p.classList.remove('scaled-up');
        } 
        // Zoomed out (below 100%) - apply scaled-up class
        else if (currentZoom < 70) {
            img.classList.add('scaled-up');
            img.classList.remove('scaled-down'); // Remove zoom-in class if applied
            p.classList.add('scaled-up');
            p.classList.remove('scaled-down');
        } 
        // Reset to original size at 100%
        else {
            img.classList.remove('scaled-down');
            img.classList.remove('scaled-up');
            p.classList.remove('scaled-down');
            p.classList.remove('scaled-up');
        }
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyfT2ltmcwiNnt5R4ZN28snJ4G2HuQtNuhJW3K0yeY7FzRVFNlQvou7v7b9Wqa48yx54A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Form submitted successfully"
        setTimeout(function () {
            msg.innerHTML = ""  
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the toggle button and the nav list
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    // Check if elements are found
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    } else {
        console.error('Menu toggle button or nav list not found');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});