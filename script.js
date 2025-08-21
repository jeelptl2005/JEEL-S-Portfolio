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

// Form submission with direct email
const contactForm = document.getElementById('contact-form');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !message) {
        showNotification('Please fill in all required fields', true);
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:jeelptl2005@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Show success message
    showNotification('Your message is ready to be sent. Your email client will open shortly.');
    
    // Open email client after a short delay
    setTimeout(() => {
        window.location.href = mailtoLink;
        contactForm.reset();
    }, 2000);
});

// Function to show notification
function showNotification(message, isError = false) {
    notificationText.textContent = message;
    
    if (isError) {
        notification.classList.add('error');
        notification.querySelector('i').className = 'fas fa-exclamation-circle';
    } else {
        notification.classList.remove('error');
        notification.querySelector('i').className = 'fas fa-check-circle';
    }
    
    notification.classList.add('show');
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
