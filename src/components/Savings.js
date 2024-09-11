import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Myprogressbar = ()=>{
    let percentage = 65;

    return(
        <CircularProgressbar 
            value={percentage}
            text = {`${percentage}%`}
            styles={{
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
            }}
        />
    )
}


export default function Savings(){
    return(
        <div className="Section" id="savingsection">
            <div>
                <h1>Savings</h1>
                <p>Planned goal: </p>
                <p>Achieved goal</p>
            </div>
            <Myprogressbar id="progressbar"/>
        </div>
    )
}