let length;
let width;
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length*width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculate_Groceries(){
    grocieres1 = parseFloat(document.getElementById('Grocery-1').value);
    grocieres2 = parseFloat(document.getElementById('Grocery-2').value);
    grocieres3 = parseFloat(document.getElementById('Grocery-3').value);

    let total = grocieres1+grocieres2+grocieres3;
    document.getElementById('grocery_result').innerText = `The total amount is:$ ${total}`;
}