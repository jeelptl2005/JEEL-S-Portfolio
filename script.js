 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

	// Form success alert after redirect
	window.addEventListener('DOMContentLoaded', () => {
    	const urlParams = new URLSearchParams(window.location.search);
    	if (urlParams.get('submit-success')) {
        	alert('Thank you for your message! I will get back to you soon.');
    	}
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

        // Form submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
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
        });

        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);
