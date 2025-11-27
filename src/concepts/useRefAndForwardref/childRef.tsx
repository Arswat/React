import { forwardRef } from "react"

const childRef = forwardRef<HTMLInputElement , {}>((props,ref) => {
    const sayHello = ()=> {
        console.log("Hlo from child")
    }

    return <div>
       <input type="text" ref={ref} {...props}></input>
    </div>
})

export default childRef