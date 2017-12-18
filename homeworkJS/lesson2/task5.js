var arr = [
    {date: "2017-12-12", time: "08:00", temp: 4},
    {date: "2017-12-12", time: "20:00", temp: 3},
    {date: "2017-12-13", time: "08:00", temp: 4},
    {date: "2017-12-13", time: "20:00", temp: 4},
    {date: "2017-12-14", time: "08:00", temp: 4},
    {date: "2017-12-14", time: "20:00", temp: 4},
    {date: "2017-11-01", time: "08:00", temp: 4},
    {date: "2017-11-01", time: "20:00", temp: 2}
];

function f (a, b){
    var tempurature = 0;
    var count = 0;
    switch (arguments.length){
        case 1:
            if (typeof a === "object") {
                var day = Date.parse(a.getFullYear() + '-' + (a.getMonth()+1) + '-' + a.getData());
                for (i=0; i<arr.length; i++) {
                    if (day === Date.parse(arr[i].date)) {
                        tempurature += arr[i].temp;
                        count++;
                    }
                }
                console.log(tempurature/count);
            } else console.log("Неправильные аргументы");
            break;
        case 2:
            if (typeof a === "number" && typeof b === "number") {
                var month = Date.parse(a + '-' + b);
                for (i=0; i<arr.length; i++) {
                    if (month === Date.parse(arr[i].date.substring(0,6))){
                        tempurature += arr[i].temp;
                        count++;
                    }
                }
                console.log(tempurature/count);
            } else if (typeof a === "object" && typeof b === "object") {
                var date1 = Date.parse(a);
                var date2 = Date.parse(b);
                for (i=0; i<arr.length; i++) {
                    var date = Date.parse(arr[i].date + 'T' + arr[i].time + ':00.000Z');
                    if (date>=date1 && date<=date2) {
                        tempurature += arr[i].temp;
                        count++;
                    }
                }
                console.log(tempurature/count);
            }
            break;
        default:
            console.log("Неправильные аргументы");
    }
}

f();



