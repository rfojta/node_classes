// dependencies
const ClassA = require('./classA');

// exports
module.exports =
class ClassB extends ClassA {
	say() {
		console.log("People call me " + this.name);
	}
}
