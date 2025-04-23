let number = +prompt("Enter number");
let result = `Gia tri ${number} sau khi tang 1 don vi : `;
function augmentNumber(number){
    result += number + 1;
    return result;
}
if (isNaN(number)) {
    alert("Please enter number");
}else{
    augmentNumber(number);
}
document.getElementById("result").innerHTML = result;