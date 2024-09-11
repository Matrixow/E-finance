export default function Budget(){
    let budget = JSON.parse(localStorage.getItem("budget")) || {save:0, spend:0}

    return(
        <div className="Section">
            <h1>Budget This month</h1>
            <p>To save: GHS {budget.save || 0}</p>
            <p>To spend: GHS {budget.spend || 0} </p>
            <p>Estimated remains: GHS {budget.save - budget.spend}</p>
            

        </div>
    )
}