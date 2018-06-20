let button = document.getElementById('render');
let preview = document.getElementById('preview');
let source = document.getElementById('source');

button.addEventListener('click', makeHTML);

function copy() {
    let input = source.value;
    preview.textContent = input;
}

function makeHTML() {
    let input = source.value;
    let result = marked(input);
    preview.innerHTML = result;
}

let timer = null;
source.addEventListener('keyup', (event) => {
    clearTimeout(timer);
    timer = setTimeout(makeHTML, 1000);
});

let fontButton = document.getElementById('fontButton');
fontButton.addEventListener('click', changeFont);

function changeFont() {
    let fontFamilies = ["Nunito", "Times New Roman", "Helvetica", "Georgia", "Arial"]
    let randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    preview.style.fontFamily = randomFont;
}

let colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', changeColor);

function changeColor() {
    let colors = ["teal", "fuchsia", "darkred", "orange", "gold", "peachpuff", "thistle", "mediumslateblue", "lawngreen", "olivedrab", "steelblue", "lightskyblue", "wheat", "midnightblue", "maroon", "dimgray", "khaki"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    preview.style.color = randomColor;
}
