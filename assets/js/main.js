function check() {
    let size = document.querySelector("#bodyheight").value
    let age = document.querySelector("#age").value
    let output = document.querySelector(".output")
    const statue = document.getElementsByName('auswahl');
    let selectedValue = null;
    for (const radio of statue) {
        if (radio.checked) {
            selectedValue = radio.value;
            console.log(selectedValue);
            break;
        }
    }
    switch (selectedValue) {
        case "schmal":
            output.innerHTML = [(Number(size) - 100) + (Number(age) / 10) * 0.9 + 0.9];
            console.log(output.innerHTML = [(Number(size) - 100) + (Number(age) / 10)*0.9 + 0.9] + " kg");
            break;
        case "breit":
            output.innerHTML = [(Number(size) - 100) + (Number(age) / 10) * 0.9 + 1.1] + " kg";
            break;
    }
}