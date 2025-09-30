import { useContext } from "react"
import { ThemeContext } from "../../App"

const compThree = ()=> {

    const {themeValue} = useContext(ThemeContext)
    const textStyle = {
       backgroundColor: themeValue === "light" ? "white" : "black",
       color: themeValue === "light" ? "black" : "white",
    }
    return <h3 style={textStyle}>Component 3</h3>
}

export default compThree