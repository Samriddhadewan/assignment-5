function getNumberFromStr(id){
    const strValue = document.getElementById(id).innerText;
    const numValue = parseFloat(strValue);
    return numValue;
}
function getNumberFromInput(id){
    const strValue = document.getElementById(id).value;
    const numValue = parseFloat(strValue);
    return numValue;
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
function showSectionByIdName(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transition-section').classList.add('hidden');
    // show the section 
    document.getElementById(id).classList.remove('hidden');

}