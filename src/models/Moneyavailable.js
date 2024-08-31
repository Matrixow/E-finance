export default function Moneyavailable({sources}){
    return(
        <div id="availablesection">
            <h3>Finance Sources</h3>
        {
            sources.map(source=>(
            <div className="available" key={source.key}>   
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