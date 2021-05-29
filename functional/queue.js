var queue = function () {
	var obj = {}; // use an object with numeric keys to store values
	var storage = {};
	var head = 0; // implement the methods: push, pop and size below USING FUNCTIONAL CLASS
	var tail = 0;
	obj.enqueue = function (value) {
		// add the value to the storage object
		// storage.push(value);
		storage[tail] = value;
		tail++;
		console.log(storage);
	};
	obj.dequeue = function () {
		if (head <= tail) {
			var value = storage[head];
			delete storage[head];
			console.log(storage);
			head++;
			return value;
		}
	};
	obj.size = function () {
		return tail - head;
	};
	return obj;
};
var plates = queue();
plates.enqueue("mini china plate");
plates.enqueue("goofy dog plate");
plates.enqueue("creepy clown plate");
console.log(plates.size());
plates.dequeue(); // home building
console.log(plates.size());
