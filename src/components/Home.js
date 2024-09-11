import UserInfo from './Uinfo';
import Menu from './Menu';
import Image from './UserImage';
import Savings from './Savings';
import Budget from './Budget';
import Moneyavailable from './Moneyavailable';
import Calculator from './Savingscalculator';




export default function Home(){
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
      <Moneyavailable/>
      </div>
      <hr/>

      <Calculator/>

      <Menu/>
    </>
    )
}