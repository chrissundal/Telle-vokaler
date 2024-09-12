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
let finalResult = 0;

updateView()
function updateView(){
    let html = /*HTML*/`
    <div class="main">
    <div class="textfelt">
    
        I denne teksten var det: <br/>
        <br/>
        ${aCounter}stk A <br/>
        ${eCounter}stk E <br/>
        ${iCounter}stk I <br/>
        ${oCounter}stk O <br/>
        ${uCounter}stk U <br/>
        ${yCounter}stk Y <br/>
        ${æCounter}stk Æ <br/>
        ${øCounter}stk Ø <br/>
        ${åCounter}stk Å <br/>
        <br/>
        Totalt var det ${finalResult} stk vokaler.
        </div>
        
        <br/>
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
        if (inputText.charAt(index).includes('a')) aCounter++; 
        if (inputText.charAt(index).includes('e')) eCounter++; 
        if (inputText.charAt(index).includes('i')) iCounter++; 
        if (inputText.charAt(index).includes('o')) oCounter++; 
        if (inputText.charAt(index).includes('u')) uCounter++; 
        if (inputText.charAt(index).includes('y')) yCounter++; 
        if (inputText.charAt(index).includes('æ')) æCounter++; 
        if (inputText.charAt(index).includes('ø')) øCounter++; 
        if (inputText.charAt(index).includes('å')) åCounter++; 
    }
    finalResult = aCounter + eCounter + iCounter + oCounter + uCounter + yCounter + æCounter + øCounter + åCounter;
    updateView();
}
