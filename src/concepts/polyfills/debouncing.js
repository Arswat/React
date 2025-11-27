function debounce(fn,delay) {
    let timerId

    return function debounced(...args) {
        if(timerId) {
            clearTimeout(timerId)
        }

        timerId = setTimeout(()=>{
           fn.apply(this,args) // setTimeout(() => fn(...args), delay);
        },delay)
    }
}
//window.addEventListener("resize", debounce(() => console.log("Resized!"), 300));

function searchResults(query) {
    console.log("search results")
}

const debouncedSearch = debounce(searchResults,500)

debouncedSearch("text")
