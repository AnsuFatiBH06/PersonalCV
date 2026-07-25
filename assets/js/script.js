const body = document.body;
const darkModeButton = document.querySelector('#themeSwitchButton');
const expandCollapseButton = document.querySelector('#expandCollapseButton');
const allHiddenInfoBoxes = document.querySelectorAll('.showHideInfo');
const allToggleIcons = document.querySelectorAll('.toggleIcon');
let boxIsExpanded = false;

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

// Switching between light and dark mode
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    if (body.classList.contains('darkMode')) {
        darkModeButton.textContent = 'Light Mode';
    } else {
        darkModeButton.textContent = 'Dark Mode';
    }
});

// Expanding/Collapsing all boxes together + manipulating toggle icon
expandCollapseButton.addEventListener('click', () => {
    boxIsExpanded = !boxIsExpanded;

    allHiddenInfoBoxes.forEach(hiddenInformation => {
        if (boxIsExpanded) {
            hiddenInformation.classList.add('show');
            expandCollapseButton.textContent = 'Collapse All';
        } else {
            hiddenInformation.classList.remove('show');
            expandCollapseButton.textContent = 'Expand All';
        }
    });

    allToggleIcons.forEach(icon => {
        if (boxIsExpanded) {
            icon.textContent = '(-)';
        } else {
            icon.textContent = '(+)';
        }
    });
});

// // Save preference
// localStorage.setItem('theme', body.classList.contains('darkMode') ? 'dark' : 'light');

// // Load preference
// if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('darkMode');
// }