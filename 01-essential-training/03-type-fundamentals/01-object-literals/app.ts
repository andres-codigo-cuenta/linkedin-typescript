var animal = {
	name: "Fido",
	species: "Dog",
	age: 5,
	speak: function() {
		console.log('Woof!');
	}
}

function makeTheAnimalSpeak(animal) {
	animal.speak();
}

makeTheAnimalSpeak(animal);