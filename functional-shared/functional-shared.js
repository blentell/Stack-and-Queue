var stack = function () {
	object = {};
	storage = {};
	index = 0;
	extend(object, sharedMethods);
	return object;
};

var extend = function (object, methods) {
	for (var key in methods) {
		object[key] = methods[key];
	}
};

var sharedMethods = {
	push: function (value) {
		storage[index] = value;
		index++;
	},

	pop: function () {
		if (index > 0) {
			index--;
			delete storage[index];
		}
	},

	size: function () {
		return index;
	},
};

var plates = stack();
plates.push("mini china plate");
console.log(plates.size());
plates.push("goofy dog plate");
console.log(storage);
plates.push("creepy clown plate");
plates.pop();
console.log(plates.size());
