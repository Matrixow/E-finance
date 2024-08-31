import { useState } from "react"

export default function Calculator(){
    const [days, setDays] = useState("")
    const [amount, setAmount] = useState(0)
    const [result, setResult] = useState(0)

    const updateAmount = ()=>{
        let master = document.querySelector("#daily_amount")
        if(master){
            setAmount(parseFloat(master.value) || 0);
        }
    }

    const updateResult = ()=>{
        let daysInput = document.querySelector("#daysnum");
        if(daysInput){
            setDays(daysInput.value || 0)
            setResult(days* amount)
        }
    }

    return(
        
        <div>
        <input type="number" placeholder="enter amount to save daily" id="daily_amount" onAbort={updateAmount}></input>
        <input type="number" placeholder="enter the number of days" id="daysnum" onChange={updateResult}></input>
        <p>Result: {result}</p>

        <h5>You will have GHS{result} if you save {amount} everyday for {days} days</h5>
        </div>
    )
}