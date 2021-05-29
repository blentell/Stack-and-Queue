var stack = function () {
	var object = Object.create(objMethods);
	object.storage = {};
	object.index = 0;

	return object;
};

var objMethods = {
	push: function (value) {
		this.storage[this.index] = value;
		this.index++;
	},

	pop: function () {
		if (this.index > 0) {
			this.index--;
			delete this.storage[this.index];
		}
	},

	size: function () {
		return this.index;
	},
};

var plates = stack();

plates.push("mini china plate");
plates.push("goofy dog plate");
plates.push("creepy clown plate");
plates.pop();
console.log(plates.size());
