document.getElementById('donate-noakhali').addEventListener('click', function(){
    const donateValue = getNumberFromInput('noakhali-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('noakhali-amount');

    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('noakhali-amount', NewDeposit);
    setInnerText('main-balance', debited);
})
document.getElementById('donate-feni').addEventListener('click', function(){
    console.log('noakhali Clicked');
})
document.getElementById('donate-injury').addEventListener('click', function(){
    console.log('noakhali Clicked');
})
