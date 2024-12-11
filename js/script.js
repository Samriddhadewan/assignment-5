const modal = document.getElementById("my_modal_1");

document.getElementById('donate-noakhali').addEventListener('click', function(event){

    const mainBalance = getNumberFromStr('main-balance');
    const donateValue = getNumberFromInput('noakhali-input');

    if(isNaN(donateValue) || donateValue <= 0 || donateValue > mainBalance){
        alert("Please enter valid Amount");
        document.getElementById('injury-input').value = '';
        modal.classList.add('hidden');
        return;
    }

    const deposit = getNumberFromStr('noakhali-amount');
    

    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;
    
    setInnerText('noakhali-amount', NewDeposit);
    setInnerText('main-balance', debited);
    

    document.getElementById('noakhali-input').value = '';
    
    // bd time and date 
    const options = { 
        timeZone: "Asia/Dhaka", 
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
    };
    // the transition section codes here 
    const div = document.createElement('div');
    div.classList.add("border")
    div.classList.add("p-4")
    div.classList.add("my-3")
    
    const h1 = document.createElement('h1');
    h1.classList.add('text-lg');
    h1.classList.add('font-semibold');
    h1.classList.add('mb-2');
    
    const p = document.createElement('p');
    p.classList.add('text-[#111111B2]');
    
    h1.innerText = `${donateValue} Taka is Donated for  Flood Relief in Noakhali,Bangladesh`;
    
    
    const bdTimeAndDate = new Date().toLocaleString("en-US", options,);
    
    
    
    p.append(bdTimeAndDate);
    div.appendChild(h1);
    div.appendChild(p);
    
    document.getElementById('comment-section').appendChild(div);
    
    

    
    
    
    // feni box 
})
document.getElementById('donate-feni').addEventListener('click', function(){
    const donateValue = getNumberFromInput('feni-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('feni-amount');

        
    if(isNaN(donateValue) || donateValue <= 0 || donateValue > mainBalance){
        alert("Please enter valid Amount");
        document.getElementById('injury-input').value = '';
        modal.classList.add('hidden');
        return;
    }


    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('feni-amount', NewDeposit);
    setInnerText('main-balance', debited);
    document.getElementById('feni-input').value = "";


       // bd time and date 
   const options = { 
    timeZone: "Asia/Dhaka", 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
};
// the transition section codes here 
const div = document.createElement('div');
div.classList.add("border")
div.classList.add("p-4")
div.classList.add("my-3")

const h1 = document.createElement('h1');
h1.classList.add('text-lg');
h1.classList.add('font-semibold');
h1.classList.add('mb-2');

const p = document.createElement('p');
p.classList.add('text-[#111111B2]');

h1.innerText = `${donateValue} Taka is Donated for  Flood Relief in Feni,Bangladesh`;


const bdTimeAndDate = new Date().toLocaleString("en-US", options,);



p.append(bdTimeAndDate);
div.appendChild(h1);
div.appendChild(p);

document.getElementById('comment-section').appendChild(div);
})

// injury box 

document.getElementById('donate-injury').addEventListener('click', function(){
    const donateValue = getNumberFromInput('injury-input');
    const mainBalance = getNumberFromStr('main-balance');
    const deposit = getNumberFromStr('injuy-amount');

        
    if(isNaN(donateValue) || donateValue <= 0 || donateValue > mainBalance){
        alert("Please enter valid Amount");
        document.getElementById('injury-input').value = '';
        modal.classList.add('hidden');
        return;
    }
    const debited = mainBalance - donateValue;
    const NewDeposit = deposit + donateValue;

    setInnerText('injuy-amount', NewDeposit);
    setInnerText('main-balance', debited);
    document.getElementById('injury-input').value = "";

       // bd time and date 
   const options = { 
    timeZone: "Asia/Dhaka", 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
};
// the transition section codes here 
const div = document.createElement('div');
div.classList.add("border")
div.classList.add("p-4")
div.classList.add("my-3")

const h1 = document.createElement('h1');
h1.classList.add('text-lg');
h1.classList.add('font-semibold');
h1.classList.add('mb-2');

const p = document.createElement('p');
p.classList.add('text-[#111111B2]');

h1.innerText = `${donateValue} Taka is Donated for  Injured in the Quota Movement`;


const bdTimeAndDate = new Date().toLocaleString("en-US", options,);



p.append(bdTimeAndDate);
div.appendChild(h1);
div.appendChild(p);

document.getElementById('comment-section').appendChild(div);


})
