// Select all nav links and content sections
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');


// Function to show the default section
function showSection(sectionId) {
    // Hide all sections by setting their display to 'none'
    contentSections.forEach((section) => {
        section.style.display = 'none';
    });

    // Find the section with the given ID
    const targetSection = document.getElementById(sectionId);

    // If the section exists, set its display to 'block' to make it visible
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}


// Add event listeners to each nav link
navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Show the clicked section
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});

// Add event listeners to each nav link
navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Show the clicked section
        const targetId = link.getAttribute('data-target');
        showSection(targetId);
    });
});

// Show Section 2 by default when the page loads
window.onload = () => {
    // Shows the section with the given ID.
     
    showSection('what');

};