var buckets = require('./buckets.js');

function sortStack(stack) {
	var newStack = new buckets.Stack(),
		peek;

	while (!stack.isEmpty()) {
		peek = stack.pop();
		
		while (!stack.isEmpty() && newStack.peek() > peek)
			stack.push(newStack.pop());

		newStack.push(peek);
	}

	return newStack;
}

// test
var stack = new buckets.Stack();
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(4);
stack.push(2);
stack = sortStack(stack);
while (!stack.isEmpty()) console.log(stack.pop());