import { createContext, useState } from 'react'
import LiftStateUp from './concepts/liftstateup/liftStateUp'
import CompOne from './concepts/useContext/compOne'
import MemoHook from './concepts/useMemoHook/memoHook'
import ParentRef from './concepts/useRefAndForwardref/parentRef'
import Reducer from './concepts/useReducerHook/reducer'
import Dashboard from './concepts/hoc/dashboard'

export const ThemeContext = createContext({ themeValue: "light" });

function  App() {

const [theme, setTheme] = useState("light")

const getData = (name:any)=> {
  console.log("Data from appjs:",name)
}

  return (
    <>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "spacebetween", flex: 1}}> 
      <div>
      <h1>React</h1>
      <h2>Lifiting State Up</h2>
      <LiftStateUp onSubmission={getData} />
      <br/>
      <h2>Use Ref and Forward Ref</h2>
      <ParentRef />
      <br/>
      <h2>Use Memo Hook</h2>
      <MemoHook />
      <br />
      <h2>Use Context</h2>
      <ThemeContext.Provider value={{themeValue: theme}}>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}> Toggle Theme</button>
      <CompOne />
      </ThemeContext.Provider>
      </div>
      <div>
        <h2>UseReducer Hook</h2>
        <Reducer />
        <h2>HOC</h2>
        <Dashboard name="Arswat"/>
        
      </div>
      </div>
    </>
  )
}

export default App
