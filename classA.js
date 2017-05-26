module.exports =
class ClassA {
	constructor(name) {
		this.name = name;
	}

	say() {
		console.log("My name is " + this.name);
	}

	sayTwice() {
		this.say();
		this.say();
	}
}
