// This script adds smooth scrolling to all links with href starting with '#'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent the default anchor click behavior
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Smoothly scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop - 56, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});