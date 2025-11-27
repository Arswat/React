const checkEven = new Promise((resolve,reject)=> {
    let number = 4
    if(number%2===0) resolve("Number is even")
    else reject("the number is odd")
})

checkEven.then((message)=> {
    console.log(message)
})
.catch((error)=> {
    console.log(error)
})


//problem 1
//input:
const tasks = [ 
    { timeout: 1000, result: true },
    { timeout: 100, result: false }, 
    { timeout: 500, result: false } 
]; 
//Output: 
// "Success 1000" 
// "Failed 100" 
// "Failed 500" 
// ["Success 1000", "Failed 100", "Failed 500"]

const messages = []

const promises = tasks.map(({timeout, result})=> {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          if(result === true) {
            resolve(`Success ${timeout}`)
          } 
          else {
            reject(`Failed ${timeout}`)
          }
       },timeout)
    })
    .then((msg)=>{
        console.log(msg)
        messages.push(msg)
    })
    .catch((err)=>{
        console.log(err)
        messages.push(err)
    })
})

Promise.allSettled(promises).then(()=>{
    console.log(messages)
})