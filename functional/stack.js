/*STACK VS. QUEUE
LIFO      FIFO[1,2]
array.push(1)
array.push(2)
array.shift() // remove the first one
array.unshift(X) // add X to the front
array.pop() // remove the last one
array[6] = Y // specifically assign a value to an index
*/ var stack = function () {
	var obj = {}; // use an object with numeric keys to store values
	var storage = {};
	var index = 0; // implement the methods: push, pop and size below USING FUNCTIONAL CLASS
	obj.push = function (value) {
		// add the value to the storage object
		// storage.push(value);
		storage[index] = value;
		index++;
	};
	obj.pop = function () {
		if (index > 0) {
			index--;
			delete storage[index];
		}
	};
	obj.size = function () {
		return index;
	};
	return obj;
};
var plates = stack();
plates.push("mini china plate");
plates.push("goofy dog plate");
plates.push("creepy clown plate");
plates.pop(); // home building
console.log(plates.size());
