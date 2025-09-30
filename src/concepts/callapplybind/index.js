
let brand = {
    firstname: "Allen",
    lastname: "Solly"
}

let printFullName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

printFullName.call(brand, "Coimbatore", "Tamil Nadu")

let brand2 = {
    firstname: "Peter",
    lastname: "England"
}

//Use case: Borrow a method from another object.
// Real scenario: You have a utility method in one object but want to reuse it for another object without duplicating code.

printFullName.call(brand2, "Coimbatore", "Tamil Nadu")

//Same as call, but arguments are passed as an array.
//Perfect when you already have arguments inside an array (like when dealing with API responses, forms, or math functions).
//Real scenario: When you get dynamic data in arrays (e.g., API response) and need to pass it as multiple arguments.

printFullName.apply(brand2, ["Coimbatore", "Tamil Nadu"])

//Returns a new function with this bound permanently.
//Used a lot in event handlers and callbacks.
//Real scenario: When passing object methods as callbacks, this gets lost.bind ensures the method always refers to the correct object.

let printbrand = printFullName.bind(brand2,"Coimbatore", "Tamil Nadu")
printbrand()

// Summary of When to Use
// call → When you want to invoke immediately and pass arguments one by one.
// 👉 Borrow methods between objects.

// apply → When you want to invoke immediately but pass arguments as an array.
// 👉 Useful for spreading arrays into functions.

// bind → When you want to create a new function with this fixed.
// 👉 Useful for event handlers, timers, or async callbacks.

const counter = {
    count: 0,
    increment: function() {
      this.count++;
      console.log(this.count);
    }
  };
  
  const btn = document.querySelector("button");
  
  // ❌ Problem: Here `this` refers to the button, not `counter`
  btn.addEventListener("click", counter.increment);
  