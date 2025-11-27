//polyfill for call()

let car1 = {
    color: "Red",
    company: "Ferrari"
}

function purchaseCar(variant,price) {
    console.log(`I have purchased ${color} - ${this.company} car ${variant} variant for ${price} rupees`)
}

Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== "function")
        throw new Error(this + "is not callable")

    context.fn = this
    context.fn(...args)
}

purchaseCar.myCall(car1,"v8",2000000)

//polyfill for apply()

Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this !== "function")
        throw new Error(this + "is not callable")
    
    if(!Array.isArray(args))
        throw new Error("The given input is not  an array")

    context.fn = this
    context.fn(...args)
}

purchaseCar.myCall(car1,["v8",2000000])

//polyfill for bind()

Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== "function")
        throw new Error(this + "cannot be bound as it is not callable")

    context.fn = this
    return function(...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}

const newFunc = purchaseCar.myBind(car1,"V8")
newFunc(2000000)