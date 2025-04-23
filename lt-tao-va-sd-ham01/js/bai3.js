let number = +prompt("Nhap vao so thu 1 :");
let number1 = +prompt("Nhap vao so thu 2 :");
let result = `Tong cua 2 so ${number}, ${number1} la : `;
function tongNumber(a,b) {
    result += a + b;
    return result;
}
if(number > number1){
    alert(`So thu nhat la : ${number} lon hon so thu 2 la : ${number1}`);
}else{
    tongNumber(number,number1);
    document.getElementById("result").innerHTML = result;
}