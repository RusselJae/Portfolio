/* <!-- -----script for tab links----- --> */

    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {

        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

/* <!-- -----script for nav----- --> */

    function toggleMenu() {
        document.querySelector("nav ul").classList.toggle("active");
    }

/* <!-- -----script for nav bar----- --> */

    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (nav) {
            nav.style.display = "block";
        }
    });

/* <!-- -----script for about col img----- --> */

    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey) { 
            const img = document.querySelector('.about-col-2 img');
            const p = document.querySelector('.about-col-1 p');
            const currentZoom = Math.round(window.devicePixelRatio * 100);

            if (currentZoom > 110) {
                img.classList.add('scaled-down');
                img.classList.remove('scaled-up');
                p.classList.add('scaled-down');
                p.classList.remove('scaled-up');
            } 

            else if (currentZoom < 70) {
                img.classList.add('scaled-up');
                img.classList.remove('scaled-down'); 
                p.classList.add('scaled-up');
                p.classList.remove('scaled-down');
            } 

            else {
                img.classList.remove('scaled-down');
                img.classList.remove('scaled-up');
                p.classList.remove('scaled-down');
                p.classList.remove('scaled-up');
            }
        }
    });

/* <!-- -----script for contact message----- --> */

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

/* <!-- -----script for menu toggle----- --> */   

    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('nav ul');

        if (menuToggle && navList) {
            menuToggle.addEventListener('click', function() {
                navList.classList.toggle('active');
            });
        } else {
            console.error('Menu toggle button or nav list not found');
        }
    });

/* <!-- -----script for smooth scrolling----- --> */   

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