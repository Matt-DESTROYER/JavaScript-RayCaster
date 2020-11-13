let $ = function(id) {
	return document.getElementById(id);
};
let dc = function(tag) {
	return document.createElement(tag);
};
const levelData = {
	level1: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 5, 3, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
		[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[1, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 4, 0, 0, 4, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 4, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	level2: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 4, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 4, 4, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 2, 0, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 3, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 5, 4, 1, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 4, 1, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 4, 4, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	level3: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 3, 5, 3, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 3, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 3, 3, 3, 3, 3, 0, 3, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 0, 3, 3, 3, 0, 3, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4, 0, 4, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4, 0, 4, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 2, 1, 0, 0, 1, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	],
	level4: [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1],
		[1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 1, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 0, 1],
		[1, 0, 3, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 4, 0, 4, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 4, 0, 4, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 1, 0, 1, 3, 0, 3, 1, 0, 1, 4, 0, 4, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 1, 0, 1, 3, 3, 3, 1, 0, 1, 4, 0, 4, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 4, 0, 4, 2, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 1, 1, 1, 3, 0, 3, 1, 1, 4, 4, 4, 4, 0, 2, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 0, 0, 0, 5, 3, 0, 3, 0, 3, 3, 3, 3, 3, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 3, 0, 3, 3, 3, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3, 0, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 3, 1, 0, 1, 0, 0, 0, 0, 4, 0, 1],
		[1, 0, 3, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 0, 3, 1, 0, 1, 1, 1, 1, 1, 4, 0, 1],
		[1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 1],
		[1, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	]
}
let mapData = {
	map: 0,
}

function getCurrentLevelData() {
	mapData.map = levelData["level" + level];
}
let player = {
	x: 16,
	y: 10,
	dir: 0,
	dirY: 0,
	rot: 0,
	speed: 0,
	strafe: 0,
	moveSpeed: 0.18,
	rotSpeed: 6 * Math.PI / 180
}
let mapWidth = 0;
let mapHeight = 0;
let miniMapScale = 8;
let screenWidth = 320;
let screenHeight = 200;
let stripWidth = 1;
let fov = 60 * Math.PI / 180;
let numRays = Math.ceil(screenWidth / stripWidth);
let fovHalf = fov / 2;
let viewDist = (screenWidth / 2) / Math.tan((fov / 2));
let twoPI = Math.PI * 2;
let numTextures = 4;
let average = 0;
let placeholder1 = 0;
let placeholder2 = 0;
let avFPS = [];
let deg90 = 90 * (Math.PI / 180)
let level = 1;

function init() {
	mapWidth = levelData.level1[0].length;
	mapHeight = levelData.level1.length;
	initScreen();
	drawMiniMap();
	bindKeys();
	gameCycle();
}
let screenStrips = [];

function initScreen() {
	let screen = $("screen");
	for (let i = 0; i < screenWidth; i += stripWidth) {
		let strip = dc("div");
		strip.style.position = "absolute";
		strip.style.left = i + "px";
		strip.style.width = stripWidth + "px";
		strip.style.height = "0px";
		strip.style.overflow = "hidden";
		strip.style.backgroundColor = "magenta";
		let img = new Image();
		img.src = (window.opera ? "walls_19color.png" : "walls.png");
		img.style.position = "absolute";
		img.style.left = "0px";
		strip.appendChild(img);
		strip.img = img;
		screenStrips.push(strip);
		screen.appendChild(strip);
	}
}

function bindKeys() {
	document.onkeydown = function(e) {
		e = e || window.event;
		switch (e.keyCode) {
			case 87:
				player.speed = 1;
				break;
			case 83:
				player.speed = -1;
				break;
			case 65:
				player.strafe = -1;
				break;
			case 68:
				player.strafe = 1;
				break;
			case 37:
				player.dir = -1;
				break;
			case 39:
				player.dir = 1;
				break;
		}
	}
	document.onkeyup = function(e) {
		e = e || window.event;
		switch (e.keyCode) {
			case 87:
			case 83:
				player.speed = 0;
				break;
			case 65:
			case 68:
				player.strafe = 0;
				break;
			case 37:
			case 39:
				player.dir = 0;
				break;
		}
	}
}

function render() {
	updateMiniMap();
	castRays();
}

function gameCycle() {
	move();
	render();
	runFPStasks();
	setTimeout(gameCycle, 1000 / 100);
}

function castRays() {
	let stripIdx = 0;
	for (let i = 0; i < numRays; i++) {
		let rayScreenPos = (-numRays / 2 + i) * stripWidth;
		let rayViewDist = Math.sqrt(rayScreenPos * rayScreenPos + viewDist * viewDist);
		let rayAngle = Math.asin(rayScreenPos / rayViewDist);
		castSingleRay(
			player.rot + rayAngle,
			stripIdx++
		);
	}
}

function castSingleRay(rayAngle, stripIdx) {
	rayAngle %= twoPI;
	if (rayAngle < 0) rayAngle += twoPI;
	let right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
	let up = (rayAngle < 0 || rayAngle > Math.PI);
	let wallType = 0;
	let angleSin = Math.sin(rayAngle);
	let angleCos = Math.cos(rayAngle);
	let dist = 0;
	let xHit = 0;
	let yHit = 0;
	let textureX;
	let wallX;
	let wallY;
	let wallIsHorizontal = false;
	let slope = angleSin / angleCos;
	let dXVer = right ? 1 : -1;
	let dYVer = dXVer * slope;
	let x = right ? Math.ceil(player.x) : Math.floor(player.x);
	let y = player.y + (x - player.x) * slope;
	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		wallX = Math.floor(x + (right ? 0 : -1));
		wallY = Math.floor(y);
		getCurrentLevelData();
		if (mapData.map[wallY][wallX] > 0) {
			let distX = x - player.x;
			let distY = y - player.y;
			dist = distX * distX + distY * distY;
			getCurrentLevelData();
			wallType = mapData.map[wallY][wallX];
			textureX = y % 1;
			if (!right) textureX = 1 - textureX;
			xHit = x;
			yHit = y;
			wallIsHorizontal = true;
			break;
		}
		x += dXVer;
		y += dYVer;
	}
	slope = angleCos / angleSin;
	let dYHor = up ? -1 : 1;
	let dXHor = dYHor * slope;
	y = up ? Math.floor(player.y) : Math.ceil(player.y);
	x = player.x + (y - player.y) * slope;
	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		wallY = Math.floor(y + (up ? -1 : 0));
		wallX = Math.floor(x);
		getCurrentLevelData();
		if (mapData.map[wallY][wallX] > 0) {
			distX = x - player.x;
			distY = y - player.y;
			let blockDist = distX * distX + distY * distY;
			if (!dist || blockDist < dist) {
				dist = blockDist;
				xHit = x;
				yHit = y;
				getCurrentLevelData();
				wallType = mapData.map[wallY][wallX];
				textureX = x % 1;
				if (up) textureX = 1 - textureX;
			}
			break;
		}
		x += dXHor;
		y += dYHor;
	}
	if (dist) {
		let strip = screenStrips[stripIdx];
		dist = Math.sqrt(dist);
		dist = dist * Math.cos(player.rot - rayAngle);
		let height = Math.round(viewDist / dist);
		let width = height * stripWidth;
		let top = Math.round((screenHeight - height) / 2);
		strip.style.height = height + "px";
		strip.style.top = top + "px";
		strip.img.style.height = Math.floor(height * numTextures) + "px";
		strip.img.style.width = Math.floor(width * 2) + "px";
		strip.img.style.top = -Math.floor(height * (wallType - 1)) + "px";
		let texX = Math.round(textureX * width);
		if (texX > width - stripWidth)
			texX = width - stripWidth;
		strip.img.style.left = -texX + "px";
	}
}

function drawRay(rayX, rayY) {
	let miniMapObjects = $("minimapobjects");
	let objectCtx = miniMapObjects.getContext("2d");
	objectCtx.strokeStyle = "rgba(0,100,0,0.3)";
	objectCtx.lineWidth = 0.5;
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		rayX * miniMapScale,
		rayY * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function move() {
	let newX;
	let newY;
	if (player.strafe === 0) {
		let moveStep = player.speed * player.moveSpeed;
		player.rot += player.dir * player.rotSpeed;
		newX = player.x + Math.cos(player.rot) * (moveStep / 2);
		newY = player.y + Math.sin(player.rot) * (moveStep / 2);
	} else {
		let strafeStep = player.strafe * player.moveSpeed;
		player.rot += player.dir * player.rotSpeed;
		newX = player.x + Math.cos(player.rot + deg90) * (strafeStep / 1.5);
		newY = player.y + Math.sin(player.rot + deg90) * (strafeStep / 1.5);
	}
	if (isBlocking(newX, newY)) {
		return;
	} else {
		player.x = newX;
		player.y = newY;
	}
}

function isBlocking(x, y) {
	if (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth) {
		return true;
	} else {
		getCurrentLevelData();
		if (mapData.map[Math.floor(y)][Math.floor(x)] != 0) {
			if (mapData.map[Math.floor(y)][Math.floor(x)] === 5) {
				level++;
				mapWidth = mapData.map[0].length;
				mapHeight = mapData.map.length;
				initScreen();
				drawMiniMap();
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}
}

function updateMiniMap() {
	let miniMap = $("minimap");
	let miniMapObjects = $("minimapobjects");
	let objectCtx = miniMapObjects.getContext("2d");
	miniMapObjects.width = miniMapObjects.width;
	objectCtx.fillStyle = "red";
	objectCtx.fillRect(
		player.x * miniMapScale - 2,
		player.y * miniMapScale - 2,
		4, 4
	);
	objectCtx.strokeStyle = "red";
	objectCtx.beginPath();
	objectCtx.moveTo(player.x * miniMapScale, player.y * miniMapScale);
	objectCtx.lineTo(
		(player.x + Math.cos(player.rot)) * miniMapScale,
		(player.y + Math.sin(player.rot)) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function drawMiniMap() {
	let miniMap = $("minimap");
	let miniMapCtr = $("minimapcontainer");
	let miniMapObjects = $("minimapobjects");
	miniMap.width = mapWidth * miniMapScale;
	miniMap.height = mapHeight * miniMapScale;
	miniMapObjects.width = miniMap.width;
	miniMapObjects.height = miniMap.height;
	let w = (mapWidth * miniMapScale) + "px";
	let h = (mapHeight * miniMapScale) + "px";
	miniMap.style.width = miniMapObjects.style.width = miniMapCtr.style.width = w;
	miniMap.style.height = miniMapObjects.style.height = miniMapCtr.style.height = h;
	let ctx = miniMap.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, miniMap.width, miniMap.height);
	for (let y = 0; y < mapHeight; y++) {
		for (let x = 0; x < mapWidth; x++) {
			getCurrentLevelData();
			let wall = mapData.map[y][x];
			if (wall > 0) {
				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(x * miniMapScale, y * miniMapScale, miniMapScale, miniMapScale);
			}
		}
	}
	updateMiniMap();
}
setTimeout(init, 1);
// FPS DRAWING
function drawFPS() {
	let canvas = document.getElementById("fps");
	let context = canvas.getContext("2d");
	context.font = "20px Arial";
	context.fillRect(0, 0, canvas.width, canvas.height)
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillText("FPS: " + average, 7.5, 32.5);
}
// FPS SENSING
function getFPS() {
	placeholder1 = performance.now()
	let frames = 1 / ((placeholder1 - placeholder2) / 1000);
	placeholder2 = performance.now();
	return Math.round(frames);
}

function runFPStasks() {
	avFPS.push(getFPS());
	average = 0;
	for (let i = 0; i < avFPS.length; i += 1) {
		average += avFPS[i];
	}
	average = Math.round(average / avFPS.length);
	if (avFPS.length > 50) {
		avFPS = [];
		drawFPS();
	}
}
