// In *sorted* list search for index of item that is closest by
// return of compareFn
// It's variant of binary search algorithm

'use strict';

var floor          = Math.floor
  , assertNotNull  = require('../../assert-not-null')
  , assertCallable = require('../../Object/assert-callable');

module.exports = function (compareFn) {
	var length, low, high, middle;

	assertNotNull(this);
	assertCallable(compareFn);

	length = (this.length >>> 0);
	low = 0;
	high = length - 1;

	while (low <= high) {
		middle = floor((low + high) / 2);
		if (compareFn(this[middle]) < 0) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	if (high < 0) {
		return 0;
	} else if (high >= length) {
		return length - 1;
	}

	return high;
};
