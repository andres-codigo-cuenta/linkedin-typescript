// catch clause
let input = '...';

try {
	JSON.parse(input);
}
catch {
	console.log(`Invlaid JSON given with ${input}`)
}