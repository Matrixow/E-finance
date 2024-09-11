import { useState } from "react"

export default function Calculator() {
    const [days, setDays] = useState(0);
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);

    const updateAmount = (e) => {
        const newAmount = parseFloat(e.target.value) || 0;
        setAmount(newAmount);
        setResult(newAmount * days);
    }

    const updateDays = (e) => {
        const newDays = parseFloat(e.target.value) || 0;
        setDays(newDays);
        setResult(newDays * amount); 
    };

    return (
        <div id="calculator">
            <h3>Savings calculator</h3>
            <input 
                type="number" 
                placeholder="Enter amount to save daily" 
                id="daily_amount" 
                onChange={updateAmount}>
            </input>
            <input 
                type="number" 
                placeholder="Enter the number of days" 
                id="daysnum" 
                onChange={updateDays}>
            </input>
            <p>Result: GHS {result}</p>
            <h5>
                You will have GHS {result} if you save {amount} every day for {days} days
            </h5>
        </div>
    );
}
