let feet;
let meter;
do{
    feet = +prompt('Nhap dung gia tri feet.');
    meter = +prompt('Nhap dung gia tri meter.');
}while(isNaN(feet)||isNaN(meter));
function feetToMeter(feet){
    return feet * 0.305;
}
function meterToDFeet(meter){
    return meter * 3.279;
}
let feettometer = feetToMeter(feet);
let metertofeet = meterToDFeet(meter);
document.write(`${feet} feet = ${feettometer} meter. <br>`);
document.write(`${meter} meter = ${metertofeet} feet.`);