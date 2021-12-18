// catch clause
var input = '...';
try {
    JSON.parse(input);
}
catch (_a) {
    console.log("Invlaid JSON given with ".concat(input));
}
