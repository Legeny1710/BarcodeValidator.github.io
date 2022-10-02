let sevenDigitCode = document.getElementById("7DigitCode")
let validateBtn = document.getElementById("ValidateBtn")
let error = document.getElementById("error")
let barcode = document.getElementById("barcode")
let gtin8El = document.getElementById("gtin8")

function roundUpNearest10(num) {
    return Math.ceil(num / 10) * 10;
  }

function ValidateBarcode() {
    if (sevenDigitCode.value.length > 7)  {
        error.textContent = "Try Again! It should be 7 digits"
        gtin8El.textContent = " "
        barcode.textContent = " "
    } else if (sevenDigitCode.value.length < 7) {
        error.textContent = "Try Again! It should be 7 digits"
        gtin8El.textContent = " "
        barcode.textContent = " "
    } else {
        error.textContent = " "
        let sevenDigitCodeList = []
        for (let i = 0; i <= sevenDigitCode.value.length; i++){
            sevenDigitCodeList.push(parseInt(sevenDigitCode.value[i]))
        }
        let N1= parseInt(sevenDigitCodeList[0])
        let N2= parseInt(sevenDigitCodeList[1])
        let N3= parseInt(sevenDigitCodeList[2])
        let N4= parseInt(sevenDigitCodeList[3])
        let N5= parseInt(sevenDigitCodeList[4])
        let N6= parseInt(sevenDigitCodeList[5])
        let N7= parseInt(sevenDigitCodeList[6])
        let SUMOFDIGITS = ((N1*3)+N2+(N3*3)+N4+(N5*3)+N6+(N7*3))
        let roundup = roundUpNearest10(SUMOFDIGITS)
        let GTIN8 = (roundup - SUMOFDIGITS) % 10
        gtin8El.textContent = "GTIN-8: " + GTIN8
        barcode.textContent = "Your Barcode is = "+ sevenDigitCode.value.toString() +GTIN8.toString()
    }
    

}


