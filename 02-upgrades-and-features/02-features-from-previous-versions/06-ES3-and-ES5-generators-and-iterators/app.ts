// iterators
let warriors1 = ['Samurai', 'Archer', 'Magician'];

// values in the array
for (let warrior of warriors1) {
	console.log(warrior);
}

// provide the keys in the array
for (let warrior in warriors1) {
	console.log(warrior);
}

// To make the below work in a browser
// Run the following
// tsc -w app.ts --downlevelIteration
function* WeaponGenerator() {
	yield 'Katana';
	yield 'Wakizashi';
	yield 'Cannon';
}

for (let weapon of WeaponGenerator()) {
	console.log(`We have a ${weapon} in our option`);
}