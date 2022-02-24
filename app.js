//income function
function getIncome(){
    const incomeInput = document.getElementById('income-input');
    const incomeText = incomeInput.value;
    const income = parseFloat(incomeText);
    if(isNaN(income)){
        errorMessage();
        
    }
    if(income < 0){
        errorMessage();
        
    }
    return income;
}
// expense function
function getExpense(){
  //food input
  const foodInput = document.getElementById('food-expense-input');
  const foodText = foodInput.value;
  const foodAmount = parseFloat(foodText);
  if(isNaN(foodAmount)){
        errorMessage();
        
    }
    if(foodAmount < 0){
        errorMessage();
        
    }
  //rent input
  const rentInput = document.getElementById('rent-expense-input');
  const rentText = rentInput.value;
  const rentAmount = parseFloat(rentText);
  if(isNaN(rentAmount)){
        errorMessage();
        
    }
    if(rentAmount < 0){
        errorMessage();
        
    }
  //clothe input
  const clotheInput = document.getElementById('clothe-expense-input');
  const clotheText = clotheInput.value;
  const clotheAmount = parseFloat(clotheText);
  if(isNaN(clotheAmount)){
        errorMessage();
        
    }
    if(clotheAmount < 0){
        errorMessage();
        
    }
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

    const balance = getBalance(); // calling function
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = balance;

    //set Total Expense and balance
    const totalExpense = getExpense(); // calling function
    const ExpenseAmount = document.getElementById('total-expense');
    ExpenseAmount.innerText = totalExpense;
    
    //error message
    if(totalExpense > balance){
        const failError = document.getElementById('notify-fail2');
        failError.style.display =  'block';  
    }

});

// save section

document.getElementById('save-button').addEventListener('click', function(){

    const saveAmount = document.getElementById('save-input');
    const saveAmountText = saveAmount.value;
    const saveAmountTotal = parseFloat(saveAmountText);
    if(isNaN(saveAmountTotal)){
        errorMessage();
        
    }
    if(saveAmountTotal < 0){
        errorMessage();
        
    }

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

//error message
function errorMessage(){

    const failError = document.getElementById('notify-fail');
    failError.style.display =  'block';  
}

document.getElementById('clear-all').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    incomeInput.value ='';
   
    const foodInput = document.getElementById('food-expense-input');
    foodInput.value = '';
   
    const rentInput = document.getElementById('rent-expense-input');
    rentInput.value = '';
  
    const clotheInput = document.getElementById('clothe-expense-input');
    clotheInput.value = '';
  
    const saveAmount = document.getElementById('save-input');
    saveAmount.value = '';
  
    const ExpenseAmount = document.getElementById('total-expense');
    ExpenseAmount.innerText = 0;
  
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = 0;
  
    const remainingBalance = document.getElementById('saving-amount');
    remainingBalance.innerText = 0;
  
    const balanceRemainingTotal = document.getElementById('remaining-balance');
    balanceRemainingTotal.innerText= 0;

    const failError = document.getElementById('notify-fail');
    failError.style.display =  'none';
    const failError2 = document.getElementById('notify-fail2');
    failError2.style.display =  'none';
    
  })
