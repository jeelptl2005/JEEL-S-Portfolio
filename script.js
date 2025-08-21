// Replace the current form submission code with this:

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission with direct email
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:jeelptl2005@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Optional: Reset the form
    contactForm.reset();
});

// Animate skills on scroll
const skillItems = document.querySelectorAll('.skill-item');
        
const animateSkills = () => {
    skillItems.forEach(item => {
        const skillBar = item.querySelector('.skill-bar');
        const rect = skillBar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                
        if (isVisible) {
            const progress = item.querySelector('.skill-progress');
            progress.style.width = progress.getAttribute('data-width');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

// Initialize skills animation
skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
    const progress = item.querySelector('.skill-progress');
    progress.style.width = '0';
});

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
