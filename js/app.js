document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = document.getElementById('income');
    const incomeText = incomeAmount.value;
    const income = parseFloat(incomeText);

    const foodAmount = document.getElementById('food');
    const foodText = foodAmount.value;
    const foodExpens = parseFloat(foodText);

    const rentAmount = document.getElementById('rent');
    const rentText = rentAmount.value;
    const rentExpens = parseFloat(rentText);

    const clothesAmount = document.getElementById('clothes');
    const clothesText = clothesAmount.value;
    const clothesExpens = parseFloat(clothesText);

    const expenseAmount = document.getElementById('total-expens');
    const totalExpenses = parseFloat(expenseAmount.innerText);
    expenseAmount.innerText = foodExpens + rentExpens + clothesExpens;


    const totalAmount = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalAmount.innerText);
    totalAmount.innerText = income - parseFloat(expenseAmount.innerText);

});

document.getElementById('save-btn').addEventListener('click', function () {
    const saveParsentInput = document.getElementById('saving-parcent');
    const saveParsentText = saveParsentInput.value;
    const saveParsent = parseFloat(saveParsentText);

    const savingAmountText = document.getElementById('saving-amount');
    // const savingAmount = parseFloat(savingAmountText.innerText);
    // savingAmountText.innerText = parseFloat(income) / saveParsent;
    const saveingParsent = income / saveParsent;
    console.log(saveingParsent);

})

