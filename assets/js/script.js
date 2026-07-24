const body = document.body;

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

document.querySelector('#themeSwitchButton').forEach(themeButton => {
    themeButton.addEventListener('click', () => {
        // toggle dark mode class
        const buttonText = themeButton.querySelector('');

        body.classList.toggle('darkMode');

        if (body.classList.contains('darkMode')) {
            buttonText.textContent = 'Toggle Light Mode';
        } else {
            buttonText.textContent = 'Toggle Dark Mode';
        }
    });
});

// // Save preference
// localStorage.setItem('theme', body.classList.contains('darkMode') ? 'dark' : 'light');

// // Load preference
// if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('darkMode');
// }