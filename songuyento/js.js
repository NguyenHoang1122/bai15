let nhap = +prompt('Nhap so ma ban muon tim so nguyen to tu 2 tro di.');
let result = "";
let draft = "";
function isPrime(number){
        if (isNaN(number)){
            result += 'Ban da nhap sai hay nhap lai';
            return result;
        }else if ( number < 2){
            result += 'Khong co so nguyen to nao nho hon 2.';
            return result;
        }else{
            for(let i = 2; i <= number; i++){
                let j = 2;
                while(j<= Math.sqrt(i)){
                    if(i%j === 0){
                        break;
                    }
                    j++;
                    }
                if(j > Math.sqrt(i)){
                    draft += i + " ";
                }
            }
            result += `Tap hop so nguyen tu 2 den ${number} la : ${draft}`;
            return result;
        }

}
isPrime(nhap);
document.write(result);