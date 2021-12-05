// let head=document.head || document.getElementsByTagName('head')
// let link=document.createElement('link')
// head.appendChild(link)

function convert(){
let fahrenheit=document.getElementById('fahrenheit')
let fahrenheitValue=fahrenheit.value
let converter = (fahrenheitValue - 32) * 5/9
let finalConverter=converter.toFixed();
let result=document.getElementById('result')
let addCls=document.querySelector('#result')
    if(fahrenheitValue =='' || fahrenheitValue ==null){
        alert('Please enter fahrenheit temperature')
        fahrenheit.focus();
        return false;
    }else{
addCls.classList.add('bg-success');       
result.innerHTML= `Result: <br>${finalConverter} °C`
//Formula: (32°F − 32) × 5/9 = 0°C
console.table(converter + ' °C');
}}



