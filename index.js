/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl=document.getElementById("input-btn")
const convertEl=document.getElementById("convert-btn")
const lengthEl=document.getElementById("length-convert")
const volumeEl=document.getElementById("volume-convert")
const massEl=document.getElementById("mass-convert")

let input=" "
convertEl.addEventListener("click",function(){
    input=inputEl.value
    convert(input)
    inputEl.value=""
})

function convert(input){
    let a=Number(input)
    lengthEl.innerHTML=`
        ${input} meters = ${(input*3.281).toFixed(3)} feet | ${input} feet = ${(input/3.281).toFixed(3)} meters
    `
    volumeEl.innerHTML=`
        ${input} liters = ${(input*0.264).toFixed(3)} gallons | ${input} gallons  = ${(input/0.264).toFixed(3)} liters
    `
    massEl.innerHTML=`
        ${input} kilos = ${(input*2.204).toFixed(3)} pounds | ${input} pounds = ${(input/2.204).toFixed(3)} kilos
    `
}


