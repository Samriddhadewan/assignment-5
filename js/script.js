document.getElementById('donate-noakhali').addEventListener('click', function(){
    const donateValue = getNumberFromInput('noakhali-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('noakhali-amount');

    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('noakhali-amount', NewDeposit);
    setInnerText('main-balance', debited);

    document.getElementById('noakhali-input').value = "";
})
document.getElementById('donate-feni').addEventListener('click', function(){
    const donateValue = getNumberFromInput('feni-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('feni-amount');

    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('feni-amount', NewDeposit);
    setInnerText('main-balance', debited);
    document.getElementById('feni-input').value = "";
})
document.getElementById('donate-injury').addEventListener('click', function(){
    const donateValue = getNumberFromInput('injury-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('injuy-amount');

    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('injuy-amount', NewDeposit);
    setInnerText('main-balance', debited);
    document.getElementById('injury-input').value = "";

})
