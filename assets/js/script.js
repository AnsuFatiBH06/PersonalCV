// Displaying and Hiding information based on user clicking
document.querySelectorAll('.infoDiv').forEach(div => {
    div.addEventListener('click', () => {
        // div.querySelector('.showHideInfo').classList.toggle('show');
        const hiddenInfo = div.querySelector('.showHideInfo');
        const toggleIcon = div.querySelector('.toggleIcon');

        hiddenInfo.classList.toggle('show'); // displaying the information when user clicks

        if (hiddenInfo.classList.contains('show')) {
            toggleIcon.textContent = '(-)';
        } else {
            toggleIcon.textContent = '(+)';
        }
    });
});

// $('.infoDiv').on('click', function() {
//     $(this).find('.showHideInfo').slideToggle(200);
// });