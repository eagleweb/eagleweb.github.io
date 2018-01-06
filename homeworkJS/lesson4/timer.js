function Stopwatch(){
    this.timeStart = 0;
    var stopwatch = this.create();
    return stopwatch;
}

Stopwatch.prototype.create = function(){
    var stopwatch = this;
    var stopWatchBox  = document.createElement('div');
    stopWatchBox.className = 'stopwatch-container';
    var output = document.createElement('div');
    output.className = 'stopwatch-time';
    output.innerHTML = '00:00';

    var timerID = document.createElement('span');
        timerID.innerHTML = 'Timer - ' + counter.getCount();

    var startbutton = document.createElement('button');
        startbutton.className = 'stopwatch-control';
        startbutton.innerHTML = 'Start';
        startbutton.onclick = function () {
            stopwatch.start(output);
        };

    var stopbutton = document.createElement('button');
        stopbutton.className = 'stopwatch-control';
        stopbutton.innerHTML = 'Stop';
        stopbutton.onclick = function () {
            stopwatch.stop(stopwatch);
    };

    var resetbutton = document.createElement('button');
        resetbutton.className = 'stopwatch-control';
        resetbutton.innerHTML = 'Reset';
        resetbutton.onclick = function () {
            stopwatch.reset(stopwatch, output);
    };

    var remove = document.createElement('div');
    remove.className = 'stopwatch-remove';
    remove.innerHTML = '&times;';
    remove.onclick = function(){
        stopwatch.remove(stopWatchBox)
    };

    stopWatchBox.appendChild(timerID);
    stopWatchBox.appendChild(output);
    stopWatchBox.appendChild(startbutton);
    stopWatchBox.appendChild(stopbutton);
    stopWatchBox.appendChild(resetbutton);
    stopWatchBox.appendChild(remove);

    return stopWatchBox;
};

Stopwatch.prototype.start = function(output){
    var timeStart = +(new Date()).getTime();
    this.show(timeStart, output);

};

Stopwatch.prototype.show = function(timeStart, output){
    this.timer = setInterval(run, 30);
    function run(){
        var time = +(new Date()).getTime();
        var timeInterval = new Date(time - timeStart);
        var minutes = getTwoDigits( timeInterval.getMinutes() );
        var seconds = getTwoDigits( timeInterval.getSeconds() );
        var outputString = minutes + ':' + seconds;
        output.innerHTML = outputString;
    }
};

Stopwatch.prototype.stop = function(stopwatch){
    clearInterval(stopwatch.timer);
};

Stopwatch.prototype.reset = function(stopwatch, output){
    output.innerHTML = '00:00';
};
Stopwatch.prototype.remove = function(elem){
    elem.parentNode.removeChild(elem);
    counter.decrement();
};

function getTwoDigits(number){
    var  twoDigits = ("00" + number).slice(-2);
    return twoDigits;
}

function Counter() {
    var count = 1;
    this.getCount = function(){
        return count;
    };
    this.increment = function(){
        count++;
    };
    this.decrement = function(){
        if(count>0)count--;
    };
}

var counter = new Counter();

function addStopWatch() {
    var stopwatch = new Stopwatch();
    document.getElementById('timer').appendChild(stopwatch);
    counter.increment();
}