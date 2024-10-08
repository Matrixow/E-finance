import { useState } from "react"
import Menu from '../components/Menu'

export default function Budget(){
    let [tosave, setTosave] = useState(0)
    let [savings, setSavings] = useState(0)
    let [spend, setSpend] = useState(0)


    const estimate = ()=>{
        let save = document.querySelector("#save") 
        let spend = document.querySelector("#spend")        

        setSavings(save.value - spend.value)

    }

    const save = ()=>{
        let save = document.querySelector("#save") 
        let spend = document.querySelector("#spend")
        let nowSaving = {
            save: save.value,
            spend: spend.value,
            estimated: save.value - spend.value
        }
        localStorage.setItem("budget", JSON.stringify(nowSaving))
        alert("Saved") 
    }

    return(
        <>
        <form>
        <h1>Monthly budget</h1>
        <p>To save: <span><input id='save' placeholder="amount to save: " onChange={estimate}></input></span> </p>
        <p>To spend:  <span><input id='spend' placeholder="amount to spend: " onChange={estimate}></input></span></p>
        <p>Estimated savings: {savings} </p>
        <button onClick={save}>Save</button>
        </form>

        <Menu/>

        </>
    )
}