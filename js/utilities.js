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
