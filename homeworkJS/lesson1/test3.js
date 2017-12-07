var s = 1000;
    p = 15;
    sn = 20000;
    month = 0;

    while (s < sn) {
        s = s + (p*s/100);
        month++;
        console.log(month);
    }


