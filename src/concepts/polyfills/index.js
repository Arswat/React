
let brand = {
    firstname: "Allen",
    lastname: "Solly"
}

let printFullName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state)
}

let printbrand2 = printFullName.bind(brand2,"Coimbatore")
printbrand("Tamil Nadu")

Function.prototype.mybind = function(...args) {
    //this var -> printFullName
    let obj = this
    params = args.slice(1)
    return function (...agrs2) {
        obj.apply(args[0],[...params, ...agrs2])   //args[0] -> brand2
    }
}


let printbrand = printFullName.mybind(brand2,"Coimbatore")
printbrand( "Tamil Nadu")