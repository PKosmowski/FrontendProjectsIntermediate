let chosenTip;

const resetButton = document.getElementById("resetButton")

const tip5 = document.getElementById("tip-1")
const tip10 = document.getElementById("tip-2")
const tip15 = document.getElementById("tip-3")
const tip25 = document.getElementById("tip-4")
const tip50 = document.getElementById("tip-5")
const tipCustom = document.getElementById("inputTip")


function addTip5() {
    tip5.style.backgroundColor = "hsl(172, 67%, 45%)"
    tip5.style.color = "hsl(183, 100%, 15%)"
    tip10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip10.style.color = "white"
    tip15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip15.style.color = "white"
    tip25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip25.style.color = "white"
    tip50.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip50.style.color = "white"
    tipCustom.style.border = "2px solid black"

    return chosenTip = 0.05

}
function addTip10() {
    tip5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip5.style.color = "white"
    tip10.style.backgroundColor = "hsl(172, 67%, 45%)"
    tip10.style.color = "hsl(183, 100%, 15%)"
    tip15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip15.style.color = "white"
    tip25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip25.style.color = "white"
    tip50.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip50.style.color = "white"
    return chosenTip = 0.1
}
function addTip15() {
    tip5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip5.style.color = "white"
    tip10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip10.style.color = "white"
    tip15.style.backgroundColor = "hsl(172, 67%, 45%"
    tip15.style.color = "hsl(183, 100%, 15%)"
    tip25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip25.style.color = "white"
    tip50.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip50.style.color = "white"
    tipCustom.style.border = "2px solid black"
    return chosenTip = 0.15
}
function addTip25() {
    tip5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip5.style.color = "white"
    tip10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip10.style.color = "white"
    tip15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip15.style.color = "white"
    tip25.style.backgroundColor = "hsl(172, 67%, 45%"
    tip25.style.color = "hsl(183, 100%, 15%)"
    tip50.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip50.style.color = "white"
    tipCustom.style.border = "2px solid black"
    return chosenTip = 0.25
}
function addTip50() {
    tip5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip5.style.color = "white"
    tip10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip10.style.color = "white"
    tip15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip15.style.color = "white"
    tip25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip25.style.color = "white"
    tip50.style.backgroundColor = "hsl(172, 67%, 45%)"
    tip50.style.color = "hsl(183, 100%, 15%)"
    tipCustom.style.border = "2px solid black"
    return chosenTip = 0.5
}
function addCustomTip() {
    const tipCustomValue = document.getElementById("inputTip").value
    tip5.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip5.style.color = "white"
    tip10.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip10.style.color = "white"
    tip15.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip15.style.color = "white"
    tip25.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip25.style.color = "white"
    tip50.style.backgroundColor = "hsl(183, 100%, 15%)"
    tip50.style.color = "white"
    tipCustom.style.border = "5px solid hsl(172, 67%, 45%)"
    return chosenTip = tipCustomValue*0.01
    
}
function chooseTipButton () { 
    const tipCustom = document.getElementById("inputTip")  
    
    tip5.addEventListener('click', addTip5)
    tip10.addEventListener('click', addTip10)
    tip15.addEventListener('click', addTip15)
    tip25.addEventListener('click', addTip25)
    tip50.addEventListener('click', addTip50)
    tipCustom.addEventListener('input', addCustomTip)

}


function equations() {
    chooseTipButton()
    const billValue = Number(document.getElementById("inputBill").value)
    const peopleValue = document.getElementById("inputPeople").value

    const tip = Number(billValue*chosenTip)    
    const total = billValue + tip

    const tipAmount = document.getElementById("tip-total")
    const totalAmount = document.getElementById("calculateTotalAmount")
    tipAmount.textContent = "$" + Number(tip/peopleValue).toFixed(2)
    totalAmount.textContent = "$" + Number(total/peopleValue).toFixed(2)

    resetButton.addEventListener('click', () => {
        location.reload()
    })
    
}

setInterval(equations, 1000)

// function stylingSelectedTip () {
//     if (chosenTip = 0.05) {
//         tip5.style.backgroundcolor = "red"
//     }

// }