var queue = function () {
	var object = Object.create(objMethods);
	object.storage = {};
	object.head = 0;
	object.tail = 0;

	return object;
};

var objMethods = {
	enqueue: function (value) {
		this.storage[this.tail] = value;
		this.tail++;
		console.log(this.storage);
	},

	dequeue: function () {
		if (this.head <= this.tail) {
			var value = this.storage[this.head];
			delete this.storage[this.head];
			console.log(this.storage);
			this.head++;
		}
	},

	size: function () {
		return this.tail - this.head;
	},
};

var plates = queue();
plates.enqueue("mini china plate");
plates.enqueue("goofy dog plate");
plates.enqueue("creepy clown plate");
console.log(plates.size());
plates.dequeue(); // home building
console.log(plates.size());
