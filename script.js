let aCounter = 0;
let eCounter = 0;
let iCounter = 0;
let oCounter = 0;
let uCounter = 0;
let yCounter = 0;
let æCounter = 0;
let øCounter = 0;
let åCounter = 0;
let inputText ='';

updateView()
function updateView(){
    let html = /*HTML*/`
    <div class="main">
    <div class="textfelt">
    
        I denne teksten var det: <br/>
        ${aCounter}stk A <br/>
        ${eCounter}stk E <br/>
        ${iCounter}stk I <br/>
        ${oCounter}stk O <br/>
        ${uCounter}stk U <br/>
        ${yCounter}stk Y <br/>
        ${æCounter}stk Æ <br/>
        ${øCounter}stk Ø <br/>
        ${åCounter}stk Å <br/>
    </div>
    
    <input type="text" value="${inputText}"onchange="printLetters(this.value)">
    <button onclick="submit()">Print Letters</button>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}
function submit(){
    updateView();
}
function printLetters(inputString){
    letterChecker(inputString);
}
function letterChecker(inputString){
    inputText = inputString;
    for(let index = 0; index <= inputText.length; index++){
        aResult = inputText.charAt(index).includes('a');
        eResult = inputText.charAt(index).includes('e');
        iResult = inputText.charAt(index).includes('i');
        oResult = inputText.charAt(index).includes('o');
        uResult = inputText.charAt(index).includes('u');
        yResult = inputText.charAt(index).includes('y');
        æResult = inputText.charAt(index).includes('æ');
        øResult = inputText.charAt(index).includes('ø');
        åResult = inputText.charAt(index).includes('å');
        if (aResult == true) aCounter++; 
        if (eResult == true) eCounter++; 
        if (iResult == true) iCounter++; 
        if (oResult == true) oCounter++; 
        if (uResult == true) uCounter++; 
        if (yResult == true) yCounter++; 
        if (æResult == true) æCounter++; 
        if (øResult == true) øCounter++; 
        if (åResult == true) åCounter++; 
    }
    console.log(aCounter)
    updateView();
}