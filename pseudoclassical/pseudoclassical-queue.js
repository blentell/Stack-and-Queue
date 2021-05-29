class Queue {
	constructor() {
		this.object = {};
		this.head = 0;
		this.tail = 0;
		this.storage = {};
	}

	enqueue = function (value) {
		this.storage[this.tail] = value;
		console.log(value);
		this.tail++;
	};
	dequeue = function () {
		if (this.head < this.tail) {
			var deleteObject = this.storage[this.head];
			console.log(` ${deleteObject} removed from the list`);
			delete this.storage[this.head];
			this.head++;
			return deleteObject;
		}
	};
	size = function () {
		return this.tail - this.head;
	};
}

var plates = new Queue();
plates.enqueue("mini china plate");
plates.enqueue("goofy dog plate");
plates.enqueue("creepy clown plate");
console.log(plates.size());
plates.dequeue();
console.log(plates.size());
plates.dequeue();
console.log(plates.size());
plates.dequeue();
console.log(plates.size());
plates.dequeue();
console.log(plates.size());
