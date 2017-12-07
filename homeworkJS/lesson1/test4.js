var s = 1000;
p = 15;
sn = 20000;
month = 0;

function Bank(f) {
    var k = s;

    switch (f){
        case 1:
            while (s < sn) {
                s = s + (p*s/100);
                month++;
                console.log(month);
            }
            break;
        case 2:
            while (k < sn) {
                k = k + (p*s/100);
                month++;
                console.log(month);
            }
            break;
        default:
            console.log('Error');
            break;
    }
}

Bank(2);