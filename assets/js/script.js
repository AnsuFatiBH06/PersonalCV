// Displaying and Hiding information based on user clicking
document.querySelectorAll('.clickableHeader').forEach(header => {
    header.addEventListener('click', () => {
        const hiddenInfo = header.nextElementSibling;
        const toggleIcon = header.querySelector('.toggleIcon');

        hiddenInfo.classList.toggle('show'); // displaying the information when user clicks

        if (hiddenInfo.classList.contains('show')) {
            toggleIcon.textContent = '(-)';
        } else {
            toggleIcon.textContent = '(+)';
        }
    });
});
