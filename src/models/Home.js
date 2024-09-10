import UserInfo from '../models/Uinfo';
import Menu from '../models/Menu';
import Image from '../models/UserImage';
import Savings from '../models/Savings';
import Budget from '../models/Budget';
import Moneyavailable from '../models/Moneyavailable';
import Calculator from '../models/Savingscalculator';




export default function Home(){
    const sources = [{
        name: "Source1",
        availablemoney: 600,
        location: "Unknown"
      }, 
      {name: "Savings", availablemoney: 700, location:"In my wallet", key:1},
      {name: "Savings", availablemoney: 700, location:"In my wallet", key:2},
      {name: "Savings", availablemoney: 700, location:"In my wallet", key:3},
      {name: "Savings", availablemoney: 700, location:"In my wallet", key:4},
      {name: "Savings", availablemoney: 700, location:"In my wallet", key:5}]
    return (


        <>
      <div className="Usercont">
      <UserInfo username="matrix" name="Ernest Ampem"/>
      <Image/>
      </div>

      <div className="Section1">
        <Savings/>
        <Budget/>
      </div>
      <hr/>
      
      <div className="Section2">
      <Moneyavailable sources={sources}/>
      </div>
      <hr/>

      <Calculator/>

      <Menu/>
    </>
    )
}