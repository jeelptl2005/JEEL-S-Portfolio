// DOM Elements
        const themeToggleBtn = document.getElementById('theme-toggle');
        const menuToggleBtn = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const skillBars = document.querySelectorAll('.skill-progress');
        const contactForm = document.getElementById('contactForm');
        const typedTextElement = document.querySelector('.typed-text');
        
        // Typing Animation
        const typedTexts = ['Student', 'Programmer'];
        let typedIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = typedTexts[typedIndex];
            
            if (isDeleting) {
                charIndex--;
                typingSpeed = 50;
            } else {
                charIndex++;
                typingSpeed = 100;
            }
            
            typedTextElement.textContent = currentText.substring(0, charIndex);
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                typedIndex++;
                if (typedIndex === typedTexts.length) typedIndex = 0;
                typingSpeed = 500; // Pause before start
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Dark Mode Toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        }
        
        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Mobile Menu Toggle
        function toggleMenu() {
            navLinks.classList.toggle('active');
        }
        
        // Animate Skill Bars on Scroll
        function animateSkillBars() {
            skillBars.forEach(skillBar => {
                const skillPosition = skillBar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (skillPosition < screenPosition) {
                    skillBar.style.width = skillBar.getAttribute('data-width');
                }
            });
        }
        
        // Form Submission
        function handleFormSubmit(e) {
            e.preventDefault();
            
            // In a real application, you would use a service like Formspree or a backend
            // to handle form submissions. This is just a simulation.
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
        
        // Event Listeners
        themeToggleBtn.addEventListener('click', toggleDarkMode);
        menuToggleBtn.addEventListener('click', toggleMenu);
        window.addEventListener('scroll', animateSkillBars);
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Start typing animation
            setTimeout(type, 1000);
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        });