const button = document.getElementById("change");
let isDarkMode = false;
button.addEventListener('click', function () {

    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    if (isDarkMode) {
        button.textContent = '«м≥нити тему';
    } else {
        button.textContent = '«м≥нити тему';
    }
})