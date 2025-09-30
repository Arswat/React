import { useReducer } from "react"

const transactionReducer = (state: number,action: { type: string, payload: number })=> {
    switch(action.type) {
        case 'WITHDRAW':
        return state - action.payload
        case 'DEPOSIT':
        return state + action.payload
        default:
        return state
    }
}

const Reducer = ()=> {

    const withdraw = (amount:number)=> {
        dispatch({type: "WITHDRAW", payload: amount})
    }

    const deposit = (amount:number)=> {
        dispatch({type: "DEPOSIT", payload: amount})
    }

    const[state, dispatch] = useReducer(transactionReducer,1000)
    return <>
      <h3>{`Balance is ${state}`}</h3>
      <button onClick={()=> {withdraw(500)}}>Withdraw</button>
      <button onClick={()=> {deposit(500)}}>Deposit</button>
    </>
}

export default Reducer

