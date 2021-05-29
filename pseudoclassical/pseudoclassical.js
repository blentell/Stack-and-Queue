class Stack {
	constructor() {
		this.object = {};
		this.index = 0;
	}

	push(value) {
		this.object[this.index] = value;
		console.log(value);
		this.index++;
		return this.index - 1;
	}
	pop() {
		var deleteObject = this.object[this.index - 1];
		this.index--;
		console.log(deleteObject);
		return deleteObject;
	}
	size() {
		console.log(this.index);
		return this.index;
	}
}

var plates = new Stack();

plates.push("mini china plate");
plates.push("goofy dog plate");
plates.push("creepy clown plate");
plates.pop();
console.log(plates.size());
