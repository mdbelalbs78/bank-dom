document.getElementById('btn-deposti').addEventListener('click', function () {

    const depositFiled = document.getElementById('deposit-filed');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmout = parseFloat(newDepositAmountString)


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)


    const currentDepositTotal = previousDepositTotal + newDepositAmout;
    depositTotalElement.innerText = currentDepositTotal;

    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBlanceTotalString);
    console.log(previousBalanceTotal);

    const currentBlanceTotal = previousBalanceTotal + newDepositAmout;
    blanceTotalElement.innerText = currentBlanceTotal;

        depositFiled.value = '';
})