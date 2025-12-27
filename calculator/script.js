const display = document.getElementById("display");

function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

// 🔥 ORU ORU NUMBER REMOVE PANNUM (DEL)
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (!isNaN(key) || key === ".") appendValue(key);
    if (["+", "-", "*", "/"].includes(key)) appendValue(key);
    if (key === "Enter") calculateResult();
    if (key === "Backspace") deleteLast();
    if (key === "Escape") clearDisplay();
});
