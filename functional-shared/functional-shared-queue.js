var queue = function () {
	object = {};
	storage = {};
	head = 0;
	tail = 0;
	extend(object, sharedMethods);
	return object;
};

var extend = function (object, methods) {
	for (var key in methods) {
		object[key] = methods[key];
	}
};

var sharedMethods = {
	enqueue: function (value) {
		storage[tail] = value;
		tail++;
		console.log(storage);
	},

	dequeue: function () {
		if (head <= tail) {
			var value = storage[head];
			delete storage[head];
			console.log(storage);
			head++;
		}
	},

	size: function () {
		return tail - head;
	},
};

var plates = queue();
plates.enqueue("mini china plate");
plates.enqueue("goofy dog plate");
plates.enqueue("creepy clown plate");
console.log(plates.size());
plates.dequeue(); // home building
console.log(plates.size());
