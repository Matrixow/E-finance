export default function Budget(){
    let budget = JSON.parse(localStorage.getItem("budget"))

    return(
        <div className="Section">
            <h1>Budget This month</h1>
            <p>To spend: {budget.spend} </p>
            <p>To save: {budget.save}</p>

        </div>
    )
}