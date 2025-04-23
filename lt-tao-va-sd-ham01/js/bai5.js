let ngoiSao = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let chomSao = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
let input = prompt('Nhap ten ngoi sao ban muon tim chom sao tuong ung.');
let result = "";
function checkSao(sao) {
    for (let i = 0; i < ngoiSao.length; i++) {
        if (sao === ngoiSao[i]) {
            result +=`Ngoi sao ${ngoiSao[i]} thuoc chom sao ${chomSao[i]}.` ;
            return result;
        }
    }
    result += `Khong co chom sao tuong ung voi ngoi sao ${sao}.`;
    return result;
}
checkSao(input);
document.write(result);