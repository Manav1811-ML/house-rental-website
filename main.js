// =====================================================
//  DALALI.COM - MAIN JAVASCRIPT
// =====================================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBars = document.getElementById('menu-bars');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');

    // Toggle mobile menu
    if (menuBars) {
        menuBars.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.toggle('active');
            menuBars.classList.toggle('fa-times');
        });
    }

    // Close menu on scroll
    window.addEventListener('scroll', function() {
        if (menu && menuBars) {
            menu.classList.remove('active');
            menuBars.classList.remove('fa-times');
        }
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menu && menuBars) {
                menu.classList.remove('active');
                menuBars.classList.remove('fa-times');
            }
        });
    });
});

// Form Validation for Login/Signup
function validateForm() {
    // Get form elements
    const email = document.getElementById('Email');
    const password = document.getElementById('Password');
    const fullName = document.getElementById('FullName');
    const phone = document.getElementById('phone_number');
    const dob = document.getElementById('Date');
    const confirmPassword = document.getElementById('confirmpassword');
    const checkbox = document.getElementById('check');

    let isValid = true;
    const errors = [];

    // Email validation
    if (email && email.value.trim() === '') {
        errors.push('Email is required');
        isValid = false;
    } else if (email && !isValidEmail(email.value)) {
        errors.push('Please enter a valid email');
        isValid = false;
    }

    // Password validation
    if (password && password.value.trim() === '') {
        errors.push('Password is required');
        isValid = false;
    } else if (password && password.value.length < 6) {
        errors.push('Password must be at least 6 characters');
        isValid = false;
    }

    // Full name validation (Signup only)
    if (fullName && fullName.value.trim() === '') {
        errors.push('Full name is required');
        isValid = false;
    }

    // Phone validation (Signup only)
    if (phone && phone.value.trim() === '') {
        errors.push('Phone number is required');
        isValid = false;
    } else if (phone && phone.value.length !== 10) {
        errors.push('Phone number must be 10 digits');
        isValid = false;
    }

    // DOB validation (Signup only)
    if (dob && dob.value === '') {
        errors.push('Date of birth is required');
        isValid = false;
    }

    // Confirm password validation (Signup only)
    if (confirmPassword && confirmPassword.value.trim() === '') {
        errors.push('Please confirm your password');
        isValid = false;
    } else if (confirmPassword && password && confirmPassword.value !== password.value) {
        errors.push('Passwords do not match');
        isValid = false;
    }

    // Terms and conditions
    if (checkbox && !checkbox.checked) {
        errors.push('Please agree to the terms and conditions');
        isValid = false;
    }

    if (!isValid) {
        alert(errors.join('\n'));
        return false;
    }

    // Form is valid
    alert('Form submitted successfully!');
    return true;
}

// Email validation function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#menu-bars') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all boxes and sections
document.querySelectorAll('.box, .featured .box, .team .box, section').forEach(element => {
    observer.observe(element);
});

// Add scroll-based navbar background
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});
