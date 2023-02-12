document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWhithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWhithdrawAmountString);
    // console.log(typeof newWithdrawAmount);
    withdrawFiled.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseInt(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);


    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBlanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bapp er bank eto tk nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBlanceTotal;


})