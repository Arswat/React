import { useCallback, useMemo, useState } from "react"
import ButtonComponent from "./buttonComponent"

const memoHook = ()=> {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)
    const [arr, setArr] = useState([1,2,3,4])

    function showMax() {
       console.log("Showmax called")
       return Math.max(...arr)
    }
    
    const maxValue = useMemo(()=> showMax(),[arr]) 

    const increment = useCallback(() => {
        console.log("Increment func called")
        setCount2(prev => prev + 1)
    }, [count2])

    return <>
    <button onClick={() => setCount(count + 1)}>Add count</button>
    <button onClick={()=> setArr([...arr, Math.round(count * Math.random())])}>Add to arr</button>
    <ButtonComponent title="Increment 2" eventHandler={increment}/>
    <br/>
    <p>Count Value: {count}</p>
    <p>max Value: {maxValue}</p>
    <p>array value: {arr}</p>
    <p>Incremented value: {count2}</p>
    </>
}

export default memoHook