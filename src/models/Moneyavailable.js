export default function Moneyavailable({sources}){
    return(
        <div id="availablesection">
        {
            sources.map(source=>(
            <div className="available">   
            <h4>{source.name}</h4>
            <p>Loc: {source.location}</p>
            <p>GHS {source.availablemoney}</p>
            </div>
            )
            )
        }
        </div>
    )
}