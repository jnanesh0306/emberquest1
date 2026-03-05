
function checkLoan() {

    let name = document.getElementById("name").value;
    let income = parseFloat(document.getElementById("income").value);
    let loan = parseFloat(document.getElementById("loan").value);
    let cibil = parseInt(document.getElementById("cibil").value);

    let result = document.getElementById("result");

    if (!name || isNaN(income) || isNaN(loan) || isNaN(cibil)) {
        result.style.color = "orange";
        result.innerHTML = "⚠ Please fill all details!";
        return;
    }

    if (income >= 25000 && cibil >= 700 && loan <= income * 10) {
        result.style.color = "#00ffae";
        result.innerHTML = "✅ Loan Approved Successfully!";
    } else {
        result.style.color = "#ff4b5c";
        result.innerHTML = "❌ Loan Rejected!";
    }
}
