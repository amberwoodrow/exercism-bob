//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  // the regex says there has to be at least one cap letter
  if (input.match(/[A-Z]/g) && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (input.slice(-1) === '?') {
    return 'Sure.';
  } else if (input === "") {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
