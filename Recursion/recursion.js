// 1. Push called Fn on stack.
// 2. Execute Fn body.
// until...
// ... another fn is called:
//      Pause the current execution and start at step 1.
// ... a return is hit:
//      Pop the current Fn off the stack.
//      Resume executing the previous Fn.

let tracker = 0;
let callMe = function () {
	tracker++
	if (tracker === 3) {
		return 'loops!';
	}
	return callMe('anytime');
};