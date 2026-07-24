const body = document.body;
const darkModeButton = document.querySelector('#themeSwitchButton');

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

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    if (body.classList.contains('darkMode')) {
        darkModeButton.textContent = 'Toggle Light Mode';
    } else {
        darkModeButton.textContent = 'Toggle Dark Mode';
    }
});

// // Save preference
// localStorage.setItem('theme', body.classList.contains('darkMode') ? 'dark' : 'light');

// // Load preference
// if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('darkMode');
// }