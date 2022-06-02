//JavaScript alert worked, so it was commented out.
//alert();

const display = document.getElementsByClassName("display")[0];
const userInput = document.getElementsByClassName("input");
const btnDisplay = document.getElementById("btnDisplay");

btnDisplay.addEventListener('click', DisplayInfo);

function DisplayInfo()
{

for(let i = 0; i < userInput.length; i++)
{
    display.innerText += userInput[i].value + "\n"; 
}

}






//Manipulated:
//display.innerText = "<b>text</b>"
