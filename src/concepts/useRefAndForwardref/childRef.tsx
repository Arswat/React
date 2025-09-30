import { forwardRef } from "react"

const childRef = forwardRef<HTMLInputElement , {}>((props,ref) => {
    return <div>
       <input type="text" ref={ref} {...props}></input>
    </div>
})

export default childRef