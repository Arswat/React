import { useEffect, useRef, useState } from "react"
import ChildRef from "./childRef"

const parentRef = ()=> {
  const inputRef = useRef<HTMLInputElement | null>(null)  
  const [input, setInput] = useState("")
  const childRef = useRef<HTMLInputElement | null>(null)
  const funcRef = useRef(null)
  useEffect(()=> {
    console.log("Input=>", input)
  })

  const handleClick = ()=>{
    childRef.current?.focus()
  }
  const handleClick2 = ()=>{
    console.log("val=>",inputRef.current?.value)
  }

  const handleClick3 = ()=>{
    console.log("val=>",inputRef.current)
    const value = inputRef.current?.value
    if(!value) inputRef.current?.focus()
    else {
    alert(value)
    setInput("")
    inputRef.current?.focus()
    }
  }

    return <div>
        <ChildRef ref={childRef} />
        <button onClick={handleClick} >Click Me</button>
        <br/>
        <input type="text" ref={inputRef} value={input} onChange={e=> setInput(e.target.value)}></input>
        <br />
        <button type="submit" onClick={handleClick3}>Submit</button>
        <p>Value: {input}</p>
    </div>
}

export default parentRef