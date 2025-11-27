function throttle(fn,delay){
    let lastCall = 0

    return function throttled(...args) {
        const now = new Date.getTime()

        if(now-lastCall>=delay)
        {
            lastCall=now
            fn.apply(this,args)
        }
    }
}

function handleScroll() {
    console.log('Scroll event occurred  at : ', Date.now())
}

const throttledScroll = throttle(handleScroll,500)

window.addEventListener('scroll',throttledScroll)
