function List () {
    this.tasks = [];

    this.rememberTo = function (task) {
        this.tasks.push(task);
    };
    this.whatIsNext = function () {
        console.log('First task', this.tasks[0]);
        this.tasks.splice(0, 1);
        console.log('First task delete ', this.tasks);
    };
    this.urgentlyRememberTo = function(task) {
        this.tasks.unshift(task);
        console.log('Remember task and first in chain ', this.tasks);
    };
    this.length = function() {
        console.log('Length of task ',this.tasks.length);
    };
    this.toString = function () {
        var taskString = this.tasks.toString();
        console.log('Task to string ', taskString);
    };
    this.isEmpty = function () {
        if(this.length == 0) {
            console.log('list is empty - true');
        } else {
            console.log('list is not empty - false');
        }
    }

}