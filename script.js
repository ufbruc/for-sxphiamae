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
