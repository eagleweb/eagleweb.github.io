var form = document.getElementById("myForm");
var parentElem = document.getElementById('shop');
var parcel_tmpl = _.template(document.getElementById('parcel').innerHTML);
var pallet_tmpl = _.template(document.getElementById('pallet').innerHTML);
var row_tmpl = _.template(document.getElementById('row').innerHTML);
var count = 2;

form.addEventListener("submit", function(event) {
    var t=$("form").serializeArray();
    console.log(t);
    event.preventDefault();
});

function RemoveLastElementFromShop() {
    var elem = document.getElementById('shop').lastElementChild;
    elem.remove();
    count--;
}

function AddElementToShop() {
    var result = row_tmpl({number: count});
    parentElem.insertAdjacentHTML("beforeEnd", result);

    $(function() {
        $('.toggle_template').bootstrapToggle();
    });

    count++;
}

function Pallet(id) {
    $('#item_' + id).empty();
    var elem = document.getElementById('item_' + id);
    var result = pallet_tmpl({number: id});
    elem.insertAdjacentHTML("beforeEnd", result);
}

function Parcel(id) {
    $('#item_'+id).empty();
    var elem = document.getElementById('item_'+id);
    var result = parcel_tmpl({number: id});
    elem.insertAdjacentHTML("beforeEnd", result);
}

function CheckBox(id) {
    $('#toggle_'+id).change(function() {
        $(this).prop('checked') === true ? Parcel(id) : Pallet(id)
    })
}
