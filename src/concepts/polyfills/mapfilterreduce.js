
//polyfill for map()
//Array.map((num,i,arr) => { })

Array.prototype.myMap = function(cb) {
    if (typeof cb !== "function") {
    throw new TypeError(cb + " is not a function");
  }
    let result = []

    for(let i=0;i<this.length;i++) {
        result.push(cb(this[i],i,this))
    }
    return result
}

//polyfill for filter()
//Array.filter((num,i,arr) => { })

Array.prototype.myFilter = function(cb) {
    let result = []

    for(let i=0;i<this.length;i++) {
        if(cb(this[i],i,this)) result.push(this[i])
    }
    return result
}

//polyfill for reduce()
//Array.prototype.reduce((acc,cur,i,arr) => { }, initialValue)

Array.prototype.myReduce = function(cb,initialValue) {
    let acc = initialValue

    for(let i=0;i<this.length;i++) {
        acc = acc ? cb(acc,this[i],i,this) : this[i]
    }
    return acc
}

Array.prototype.myFlat = function (arr) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result = result.concat(flat(this[i]));
    } else {
      result.push(this[i]);
    }
  }
  return result;
}