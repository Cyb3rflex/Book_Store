// NAVBAR SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle'); // Ensure the correct class for the toggle button
    const navbarLinks = document.querySelector('.nav-links'); // Ensure the correct class for the navbar links

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('show-links'); // Match the class used in CSS for visibility
    });
});




// NOTIFICATION SCRIPT
const input = document.getElementById('notify');

function notification() {
    Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
            popupNotify();
        } else {
            console.log('Permission denied');
        }
    });
}

function popupNotify() {
    const notification = new Notification('New Notification', {
        body: input.value || 'This is a default notification message.'
    });
    
    notification.onclick = function() {
        console.log('Notification clicked!');
    };
}

// HEADER SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = 0;
    headerContent.style.transform = 'translateY(50px)';

    setTimeout(() => {
        headerContent.style.transition = 'all 1s ease';
        headerContent.style.opacity = 1;
        headerContent.style.transform = 'translateY(0)';
    }, 300);
});

// FADE-IN EFFECTS
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => {
    observer.observe(el);
});

// TESTIMONIAL SCRIPT
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const testimonials = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// NEWSLETTER SCRIPT
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    if (email) {
        // Simulate form submission (you can replace this with actual form handling logic)
        alert('Thank you for subscribing! We will send updates to ' + email);
        
        // Optionally clear the form
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// FOOTER SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = 'Back to Top';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    // Show/Hide scroll to top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Adjust the scroll threshold as needed
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});







