// Returns index at which lists start to differ (looking from left)

'use strict';

var every         = Array.prototype.every
  , call          = Function.prototype.call
  , toArray       = require('../../Object/to-array')
  , sortMethod    = call.bind(require('../../Object/get-compare-by')('length'));

module.exports = function (list) {
	var lists, r, l;

	lists = [this].concat(toArray(arguments)).sort(sortMethod);
	l = r = lists[0].length >>> 0;

	every.call(lists.slice(1), function (list) {
		var i;
		for (i = 0; i < l; ++i) {
			if (i > r) {
				break;
			} else if (this[i] !== list[i]) {
				r = i;
				break;
			}
		}
		return r;
	}, lists[0]);

	return r;
};
