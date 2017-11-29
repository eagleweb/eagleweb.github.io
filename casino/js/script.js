var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    var t=$("form").serializeArray();
    console.log(t);
    event.preventDefault();
});