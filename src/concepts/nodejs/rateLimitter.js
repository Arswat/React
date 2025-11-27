const userRequests = new Map()

function rateLimit(maxRequests = 3, windowMS = 10000){

    return (req,res,next)=> {
        const userId= req.user?.id || req.ip

        const now = Date.now()

        if(!userRequests.has(userId)) {
            userRequests.set(userId,[])
        }

        const timestamps = userRequests.get(userId).filter(
            t => now - t < windowMS
        )

        userRequests.set(userId,timestamps)

        if(timestamps.length>=maxRequests){
            return res.status(429).json({
                success: "false",
                message: "Too many requests. Try again later"
            })
        }

        timestamps.push(now)
        userRequests.set(userId,timestamps)

        next()
    }
}