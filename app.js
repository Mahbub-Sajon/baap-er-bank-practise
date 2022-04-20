function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value; 
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}


function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); 
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
     const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText =  previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}








document.getElementById('deposit-button').addEventListener('click', function(){

    
    const depositAmount = getInputValue('deposit-input');

    if(depositAmount>0){
        const updateDepositValue = updateTotalField('deposit-total', depositAmount);
        const updateBalanceAmount = updateBalance(depositAmount, true);
    }
    
   
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousdepositTotal = parseFloat(depositTotalText);
    
    // depositTotal.innerText = depositAmount + previousdepositTotal;

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    //  balanceTotal.innerText =  previousBalanceTotal + depositAmount;
    
    
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<=CurrentBalance){
        const updateWithdrawValue =  updateTotalField('withdraw-total', withdrawAmount);
        const updateBalanceAmount = updateBalance(withdrawAmount, false);
    }
    
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
   
   


    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdrawAmount + previousWithdrawAmount;
    
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    

    // withdrawInput.value = '';
})