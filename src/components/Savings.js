import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Myprogressbar = (props)=>{

    return(
        <CircularProgressbar 
            value={props.percentage || 0}
            text = {`${props.percentage || 0}% `}
            styles={{
            pathColor: `rgba(62, 152, 199, ${(props.percentage || 0) / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
            }}
        />
    )
}


export default function Savings(){
    let savingsdata = JSON.parse(localStorage.getItem("savings")) || {tosave:0, currentlysaved:0}
    return(
        <div className="Section" id="savingsection">
            <div>
                <h1>Savings</h1>
                <p>Planned goal: GHS {savingsdata.tosave || 0}</p>
                <p>Achieved goal: GHS {savingsdata.currentlysaved || 0} </p>
            </div>
            <Myprogressbar percentage={savingsdata.percentage} id="progressbar"/>
        </div>
    )
}