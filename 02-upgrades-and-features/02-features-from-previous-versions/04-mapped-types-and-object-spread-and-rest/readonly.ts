interface Creature {
	readonly height: number;
	readonly width: number;
	readonly ocean: string;
}

let vreeg: Creature = { height: 100, width: 50, ocean: 'Pacifc'};
console.log(vreeg);

// Warning at the developer level
vreeg.ocean ="Atlantic";
console.log(vreeg);