//functions with error handling
let flag = false;
function getValue(inputId, err1, err2) {
    let input = document.getElementById(inputId);
    let number = parseFloat(input.value);
    let errMsg1 = document.getElementById(err1);
    let errMsg2 = document.getElementById(err2);
    if (Number.isInteger(number) == false) {
        errMsg1.style.display = 'block';
        errMsg2.style.display = 'none';
        flag = true;
        return 'invalid input...!!, please give an integer number';
    }
    else if (number < 0) {
        errMsg1.style.display = 'none';
        errMsg2.style.display = 'block';
        flag = true;
        return 'invalid input...!!, please give a positive number';
    }
    errMsg1.style.display = 'none';
    errMsg2.style.display = 'none';
    return number;
}
function setValue(num, setId) {
    let setfield = document.getElementById(setId);
    setfield.innerText = num;
}
//calculation of balance and expense
function calculate() {
    flag = false;
    let income = getValue('income', 'incomeErr1', 'incomeErr2');
    let food = getValue('food', 'foodErr1', 'foodErr2');
    let rent = getValue('rent', 'rentErr1', 'rentErr2');
    let clothes = getValue('clothes', 'clothesErr1', 'clothesErr2');

    if (flag == true) {
        return 'Warning: invalid input...!!!!'
    }

    let expense = food + rent + clothes;

    if (income < expense) {
        alert('Expense is exceeding the income by ' + (expense - income) + 'taka...!!!!');
        return;
    }

    let balance = income - expense;
    setValue(expense, 'expense');
    setValue(balance, 'balance');
}
//savings and remaining balance calculation
function savingsCalc() {
    flag = false;
    let save = getValue('save', 'saveErr1', 'saveErr2');
    let income = getValue('income', 'incomeErr1', 'incomeErr2');
    if (flag == true) {
        return 'Warning: invalid input...!!!!'
    }
    let balance = document.getElementById('balance').innerText;
    let savingAmount = (income * save) / 100;
    if (balance < savingAmount) {
        alert("You don't have that much money..please check it again");
        return;
    }
    let remainBalance = balance - savingAmount;
    setValue(savingAmount, 'savingAmount');
    setValue(remainBalance, 'remainBalance');
}