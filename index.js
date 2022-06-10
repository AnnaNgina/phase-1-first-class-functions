function receivesAFunction(name) {
    name();
}
function returnsANamedFunction() {
    function timeToCode() {return " "}
    return timeToCode;
}

function returnsAnAnonymousFunction() {
    return function(){}
}