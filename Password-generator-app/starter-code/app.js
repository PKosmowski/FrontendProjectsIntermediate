const slider = document.getElementById("lengthRange")
const sliderOutput = document.getElementById("characterLengthNumber")

let isUppercase = false;
let isLowercase = false;
let isNumbers = false;
let isSymbols = false;

const generateButton = document.getElementById("generateButton")
const copyButton = document.getElementById("iconCopy")

const uppercaseButton = document.getElementById("upperButton") 
const lowercaseButton = document.getElementById("lowerButton") 
const numbersButton = document.getElementById("numbersButton") 
const symbolsButton = document.getElementById("symbolsButton") 

const upperSVG = document.getElementById("checkboxImg1")
const lowerSVG = document.getElementById("checkboxImg2")
const numbersSVG = document.getElementById("checkboxImg3")
const symbolsSVG = document.getElementById("checkboxImg4")

const grade1 = document.getElementById("gradeContainer1")
const grade2 = document.getElementById("gradeContainer2")
const grade3 = document.getElementById("gradeContainer3")
const grade4 = document.getElementById("gradeContainer4")

const gradeText = document.getElementById("gradeText")


uppercaseButton.onclick = () => {
    if (!isUppercase) {
        isUppercase = true;
        uppercaseButton.style.backgroundColor = "#A4FFAF";
        uppercaseButton.style.outlineColor = "#A4FFAF";
        upperSVG.style.display = "flex"
        randomize()
    } else {
        isUppercase = false;
        uppercaseButton.style.backgroundColor = "#24232C";
        uppercaseButton.style.outlineColor = "#E6E5EA";
        upperSVG.style.display = "none";
        randomize()
    }
}

lowercaseButton.onclick = () => {
    if (!isLowercase) {
        isLowercase = true;
        lowercaseButton.style.backgroundColor = "#A4FFAF";
        lowercaseButton.style.outlineColor = "#A4FFAF";
        lowerSVG.style.display = "flex"
        randomize()
    } else {
        isLowercase = false;
        lowercaseButton.style.backgroundColor = "#24232C";
        lowercaseButton.style.outlineColor = "#E6E5EA";
        lowerSVG.style.display = "none";
        randomize()
    }
}

numbersButton.onclick = () => {
    if (!isNumbers) {
        isNumbers = true;
        numbersButton.style.backgroundColor = "#A4FFAF";
        numbersButton.style.outlineColor = "#A4FFAF";
        numbersSVG.style.display = "flex"
        randomize()
    } else {
        isNumbers = false;
        numbersButton.style.backgroundColor = "#24232C";
        numbersButton.style.outlineColor = "#E6E5EA";
        numbersSVG.style.display = "none";
        randomize()
    }
}
symbolsButton.onclick = () => {
    if (!isSymbols) {
        isSymbols = true;
        symbolsButton.style.backgroundColor = "#A4FFAF";
        symbolsButton.style.outlineColor = "#A4FFAF";
        symbolsSVG.style.display = "flex"
        randomize()
    } else {
        isSymbols = false;
        symbolsButton.style.backgroundColor = "#24232C";
        symbolsButton.style.outlineColor = "#E6E5EA";
        symbolsSVG.style.display = "none";
        randomize()
    }
}


slider.oninput = function() {
    sliderOutput.textContent = this.value
    randomize()
}

function randomize() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnoprstuvwxyz'
    const numbers = '0123456789'
    const symbols ='!@#$%^&*()_+<>{}'

    let grade = 0;
    let total = '';

    booleanTab = [isUppercase, isLowercase, isNumbers, isSymbols]
    
    if (booleanTab[0]) {
        total += uppercaseLetters
        grade += 20;
    }

    if (booleanTab[1]) {
        total += lowercaseLetters
        grade += 20;
    }

    if (booleanTab[2]) {
        total += numbers
        grade += 20;
    }

    if (booleanTab[3]) {
        total += symbols
        grade += 20;
    }

    let counter = 0;
    let length = Number(slider.value);
    let result = '';


    while (counter < length) {
        result += total.charAt(Math.floor(Math.random()*total.length))
        counter++
    }
    const generatedPassowrd = document.getElementById("generatedPassword")
    generatedPassowrd.textContent = result

    if (!booleanTab[0] && !booleanTab[1] && !booleanTab[2] && !booleanTab[3]) {
        generatedPassowrd.textContent = "Password not generated!"
        generatedPassowrd.style.opacity = "50%"
    } else {
        generatedPassowrd.style.opacity = "100%"
    }


    if (result.length > 10) {
        grade += 20
    }


    if (grade > 20 && grade <= 40) {
        grade1.style.backgroundColor = "red"
        grade2.style.backgroundColor = "#24232C"
        grade3.style.backgroundColor = "#24232C"
        grade4.style.backgroundColor = "#24232C"
        gradeText.textContent = "TOO WEAK!"
    } else if (grade > 40 && grade <= 60) {
        grade1.style.backgroundColor = "orange"
        grade2.style.backgroundColor = "orange"
        grade3.style.backgroundColor = "#24232C"
        grade4.style.backgroundColor = "#24232C"
        gradeText.textContent = "WEAK"
    } else if (grade > 60 && grade <= 80) {
        grade1.style.backgroundColor = "yellow"
        grade2.style.backgroundColor = "yellow"
        grade3.style.backgroundColor = "yellow"
        grade4.style.backgroundColor = "#24232C"
        gradeText.textContent = "MEDIUM"
    } else if (grade > 80) {
        grade1.style.backgroundColor = "green"
        grade2.style.backgroundColor = "green"
        grade3.style.backgroundColor = "green"
        grade4.style.backgroundColor = "green"
        gradeText.textContent = "STRONG"
    } else {
        grade1.style.backgroundColor = "#24232C"
        grade2.style.backgroundColor = "#24232C"
        grade3.style.backgroundColor = "#24232C"
        grade4.style.backgroundColor = "#24232C"
    }

    copyButton.addEventListener('click', () => {
        console.log('haslo skopiowane: ' + result);
        navigator.clipboard.writeText(result)
        
    })
    
}

generateButton.onclick = () => {
    randomize()
}

