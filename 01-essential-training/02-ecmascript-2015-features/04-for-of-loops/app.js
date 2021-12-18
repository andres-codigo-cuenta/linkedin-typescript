var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];
for (var index in array) {
    var value = array[index];
    console.log("".concat(index, ": ").concat(value));
}
// ES2015
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
