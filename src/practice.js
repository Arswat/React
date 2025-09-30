

const p1 = fetch("abc")
const p2 = fetch("def")
const p3 = fetch("ghi")

Promise.all([p1,p2,p3])
.then((Response)=> {
    console.log("All responses:", Response)
})
.catch((error)=> {
    console.log("Erro occurred:", error)
})

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((acc,value) => {
        return acc+value
},0)