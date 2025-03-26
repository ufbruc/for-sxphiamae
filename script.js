const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

function updatePageVisibility() {
    pages.forEach((page, index) => {
        if (index < currentPageIndex) {
            page.classList.add('flipped');
            page.classList.remove('active');
            page.style.zIndex = 1; // Flipped pages go to the back
        } else if (index === currentPageIndex) {
            page.classList.add('active');
            page.classList.remove('flipped');
            page.style.zIndex = 2; // Active page stays on top
        } else {
            page.classList.remove('active', 'flipped');
            page.style.zIndex = 0; // Unflipped pages stay in the middle
        }
    });
}

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updatePageVisibility();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updatePageVisibility();
    } else if (currentPageIndex === pages.length - 1) {
        // Redirect to last-page.html when on the last page
        window.location.href = 'last-page.html';
    }
});

// Initialize visibility on page load
updatePageVisibility();

function adjustButtonPosition() {
    const controls = document.querySelector('.controls');
    const book = document.querySelector('.book');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Move buttons to the bottom of the sticky note
        controls.style.position = 'absolute';
        controls.style.bottom = '400px'; // Adjust as needed
        controls.style.left = '80%';
        controls.style.transform = 'translateX(-50%)';
    } else {
        // Reset buttons to their original position
        controls.style.position = 'relative';
        controls.style.bottom = 'auto';
        controls.style.left = 'auto';
        controls.style.transform = 'none';
    }
}

// Adjust button position on page load and window resize
window.addEventListener('load', adjustButtonPosition);
window.addEventListener('resize', adjustButtonPosition);
