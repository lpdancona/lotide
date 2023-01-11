const assertEqual = function (actual, expected) {
  if (JSON.stringify(actual) == JSON.stringify(expected)) console.log("True");
  else console.log("False");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
