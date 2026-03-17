function setup() {
  noCanvas();

  // Name
  let name = prompt("Hello, what is your name?");
  alert("Welcome " + name + ", it's a pleasure to greet you!");
  //hacker attempt
  let old = prompt("May I ask how old are you?");
  let birthyear = 2026 - old;
  alert(
    "In that case, you must have been born around " + birthyear + ", right? 😊"
  );
  // Two integers
  let a = Number(prompt("Please enter an integer value:"));
  let b = Number(prompt("Please enter a second integer value:"));
  alert(
    "Let me show you what I can do with the numbers " + a + " and " + b + ":"
  );
  //simple alerts
  alert(a + " + " + b + " = " + (a + b));
  alert(a + " - " + b + " = " + (a - b));
  alert(a + " * " + b + " = " + a * b);
  alert(a + " / " + b + " = " + a / b);
  alert(a + " % " + b + " = " + (a % b));
  alert("The max of " + a + " and " + b + " is " + max(a, b));
  alert("The min of " + a + " and " + b + " is " + min(a, b));
  // Decimal number
  let x = Number(prompt("Please enter a value with a decimal part:"));
  // fancy alerts
  alert("Let me show you what I can do with the number " + x + ":");
  alert("The negative of " + x + " is " + -x);
  alert("The sine of " + x + " radians is " + sin(x));
  alert("The cosine of " + x + " radians is " + cos(x));
  alert(x + "^10 = " + pow(x, 10));
  alert("Square root of " + x + " = " + sqrt(x));
  alert("Rounded " + x + " = " + round(x));
  alert("Floor of " + x + " = " + floor(x));
  alert("Ceiling of " + x + " = " + ceil(x));
  alert("Absolute value of " + x + " = " + abs(x));
}
