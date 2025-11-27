function createCounter(){
    let count=0
    function increment(){
        count++
        return count
    }
    return increment    
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Output: 1
console.log(counter2()); // Output: 1

console.log(counter1()); // Output: 2
console.log(counter2()); // Output: 2

// count variable is not accessible here because it's private to the closure
// console.log(count); // ReferenceError