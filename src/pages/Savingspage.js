import { useState } from 'react'
import Menu from '../components/Menu'
import { Myprogressbar } from '../components/Savings'

export default function Savings(){
    const [percentage, setPercentage] = useState(0)
    const updatePercentage = ()=>{
        
        let tosave = document.querySelector("#save")
        let currSaved = document.querySelector("#saved")
        console.log(((parseFloat(tosave.value) - parseFloat(currSaved.value)/tosave)*100))
        setPercentage((parseFloat(currSaved.value)/parseFloat(tosave.value))*100)
    }

    const saveSavings = ()=>{
        let tosave = document.querySelector("#save")
        let currSaved = document.querySelector("#saved")
        let savings = {
            tosave: tosave.value,
            currentlysaved: currSaved.value,
            percentage: percentage
        }
        localStorage.setItem("savings", JSON.stringify(savings))
        alert("Saved");
        
    }

    return (
        <>
        <form>
        <h1>Savings</h1>
        <p>To save: <span><input id='save' placeholder="amount to save: " onChange={updatePercentage} ></input></span> </p>
        <p>Currently saved:  <span><input id='saved' placeholder="amount saved currently: " onChange={updatePercentage} ></input></span></p>
        <p>Percentage saved: </p>
        <Myprogressbar percentage={percentage}/> <br></br>
        <button onClick={saveSavings}>Save</button>
        </form>

        <Menu/>

        </>
    )
}