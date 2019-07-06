// 1.
(function() {
  if (true) {
    var variable = 'function scope';
  }

  console.log(variable);
})();

// 2.
(function() {
  var variable = 'function scope';
  var variable = 'duplicated';

  console.log(variable);
})();

// 3.
(function() {
  variable = 'no var';

  console.log(variable);
})();

console.log(variable);

// 4.
(function() {
  console.log(variable);
  var variable = 'hoisted';
})();

// (function() {
//   var variable;
//   console.log(variable);
//   variable = "hoisted";
// })();
