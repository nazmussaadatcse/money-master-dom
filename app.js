//income function
function getIncome(){
    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);
    return income;
}
// expense function
function getExpense(){
  //food input
  const foodInput = document.getElementById('food-expense-input');
  const foodText = foodInput.value;
  const foodAmount = parseFloat(foodText);
  //rent input
  const rentInput = document.getElementById('rent-expense-input');
  const rentText = rentInput.value;
  const rentAmount = parseFloat(rentText);
  //clothe input
  const clotheInput = document.getElementById('clothe-expense-input');
  const clotheText = clotheInput.value;
  const clotheAmount = parseFloat(clotheText);
  //total expense
  const totExpense = foodAmount + rentAmount + clotheAmount;
  return totExpense;
}
//balance function
 function getBalance(){
    //calling function
    const incomeAmount = getIncome(); // calling function
    const totalExpense = getExpense(); // calling function

    const balance = incomeAmount - totalExpense;
    return balance;
}

// Calculate button
document.getElementById('calculate-button').addEventListener('click', function(){


    //set Total Expense and balance
    const totalExpense = getExpense(); // calling function
    const ExpenseAmount = document.getElementById('total-expense');
    ExpenseAmount.innerText = totalExpense;

    const balance = getBalance(); // calling function
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance;

});

// save section

document.getElementById('save-button').addEventListener('click', function(){

    const saveAmount = document.getElementById('save-input');
    const saveAmountText = saveAmount.value;
    const saveAmountTotal = parseFloat(saveAmountText);

    //save amount
    const incomeTotal = getIncome(); // calling function
    const save = (saveAmountTotal/100)* incomeTotal;
    // set saving amount
    const remainingBalance = document.getElementById('saving-amount');
    remainingBalance.innerText = save;

    //remaining balance
    const balanceRemaining = getBalance();  // calling function
    const remaining = balanceRemaining - save;
    //set remaining balance
    const balanceRemainingTotal = document.getElementById('remaining-balance');
    balanceRemainingTotal.innerText= remaining;
});
