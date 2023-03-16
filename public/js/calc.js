// Input all Categories/Elements for the fields

const startingValue = document.getElementById("startingValue");
const downPayment = document.getElementById("downPayment");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanDuration = document.getElementById("loanDuration");
const form = document.getElementById("loan");

//console.log(startingValue, downPayment, loanAmount, interestRate, loanDuration, form);

//write out basic function calcs for each field (research)
downPayment.addEventListener("keyup", () => {
    loanAmount.value = startingValue.value - downPayment.value;

    let loanAmountValue = loanAmount.Value;
    return loanAmountValue;
});


function calcLoan (loanAmount, interestRate, monthlyPayments) {
    function percentToDec(percent) {
        return percent / 12 / 100;
    }
    interestRate = percentToDec(interestRate);
    
    function convertYearstoMonths(year) {
        return year * 12;
    }
    monthlyPayments = convertYearstoMonths(monthlyPayments);
    
    let loan = (interestRate * loanAmount)/(1-Math.pow(1+interestRate,-monthlyPayments));
    return parseFloat(loan.toFixed(2));
}

//call the formulas to show in mon payment field.
form.onsubmit = (e) => {
    e.preventDefault();


    let loanAmount = startingValue.value - downPayment.value;
    let monthlyPayment = calcLoan(loanAmount, interestRate.value, loanDuration.value);

    document.getElementById("monthlyPayment").innerHTML= `$ ${monthlyPayment}`;

    console.log(loanAmount, interestRate.value, loanDuration.value);
    
};







