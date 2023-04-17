// document.getElementById("count-el").innerText = 5;


//initialize at 0
//listen to clicks
//increment count variable
// change to reflect
let saveEl = document.getElementById('save-el')
let countEl= document.getElementById('count-el')
let total = document.getElementById('total')
let totalz = 0
let count =0;
function increment(){
    count += 1
    countEl.textContent= count
}
function save(){
    let countStr= count + ' - '
    saveEl.textContent += countStr
    totalz += count
    total.textContent = totalz
    count = 0
    countEl.textContent=0
}
