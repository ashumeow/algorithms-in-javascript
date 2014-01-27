var buckets = require('./buckets.js');

function reverseStack(stack) {
	var peek = stack.pop();

	if (!stack.isEmpty())
		reverseStack(stack);

	push_to_bottom(stack, peek);
}

function push_to_bottom(stack, item) {
	var peek;

	if (stack.isEmpty())
		stack.push(item);
	else {
		peek = stack.pop();
		push_to_bottom(stack, item);
		stack.push(peek);
	}
}

// test
var stack = new buckets.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
reverseStack(stack);
while (!stack.isEmpty()) console.log(stack.pop());