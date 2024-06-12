// script.js
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.value === "=") {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                return;
            }

            if (button.dataset.value === "C") {
                display.innerText = "";
                return;
            }

            display.innerText += button.dataset.value;
        });
    });
});
