const calculator = document.querySelector("#case");
calculator.addEventListener("click", (e) => {
    const clickedButton = e.target
    if (clickedButton.tagName === "BUTTON"){
        const value = clickedButton.dataset.value;
        const screen = document.querySelector("#screen");
        screen.textContent += value};
});


