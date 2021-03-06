// Generates globally unique identifier
// Simple and friendly implementation for average web application purpose
// it's format is different from official GUID format:
// http://en.wikipedia.org/wiki/Globally_unique_identifier

'use strict';

var now   = Date.now
  , start = Date.UTC(2011, 8, 21)
  , salt  = Math.floor(Math.random() * 36).toString(36)
  , generated = {};

module.exports = function () {
	var id = now() - start;
	while (generated.hasOwnProperty(id)) {
		++id;
	}
	generated[id] = true;
	return id.toString(36) + salt;
};
