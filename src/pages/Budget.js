import { useState } from "react"

export default function Budget(){
    let [tosave, setTosave] = useState(0)
    let [savings, setSavings] = useState(0)
    let [spend, setSpend] = useState(0)


    const estimate = ()=>{
        let save = document.querySelector("#save") 
        let spend = document.querySelector("#spend")        

        console.log(save.value - spend.value)
        setSavings(save.value - spend.value)

    }

    return(
        <>
        <form>
        <h1>Monthly budget</h1>
        <p>To save: <span><input id='save' placeholder="amount to save: " onChange={estimate}></input></span> </p>
        <p>To spend:  <span><input id='spend' placeholder="amount to spend: " onChange={estimate}></input></span></p>
        <p>Estimated savings: {savings} </p>
        </form>

        </>
    )
}