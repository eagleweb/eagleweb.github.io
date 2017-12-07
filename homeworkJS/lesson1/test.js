var x = 4;
    y = 8;

function Start (s) {
    if (s === "+"){
        y = y + x;
    } else

    if (s === "-"){
        y = y - x;
    } else

    if (s === "*"){
        y = y * x;
    } else

    if (s === "/"){
        y = y / x;
    } else

    if (s === "Abs" || s === "abs" || s === "ABS"){
        y = Math.abs(y);
    } else

    if (s === "Mod" || s === "MOD"){
        y = y % x;
    }
    console.log(y);
}

Start('*');

