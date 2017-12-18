var str = "";

var regular = /[^A-Za-zA-Яа-я0-9]/g;

str = str.toLowerCase().replace(regular, '');
 function isPalindrom() {
     for (var i=0; i<str.length/2; i++) {
         if(str[i] !== s[str.length-i-1]) return false;
     }
     return true;
 }