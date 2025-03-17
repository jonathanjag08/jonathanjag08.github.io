document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to hide all sections
    function hideSections() {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach((section) => {
            section.style.display = 'none';
        });
    }

    // Function to show the clicked section
    function showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Event listener for each nav link
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            hideSections(); // Hide all sections
            const targetId = link.getAttribute('data-target'); // Get the section to show
            showSection(targetId); // Show the relevant section
        });
    });

    // Optionally, show the first section by default (or none if you prefer)
    showSection('who');
});