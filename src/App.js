import './App.css';
import UserInfo from './models/Uinfo';
import Menu from './models/Menu';
import Image from './models/UserImage';
import Savings from './models/Savings';
import Budget from './models/Budget';
import Moneyavailable from './models/Moneyavailable';

function App() {
  const sources = [{
    name: "Source1",
    availablemoney: 600,
    location: "Unknown"
  }]
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
      
      <div className="Section2">
      <Moneyavailable sources={sources}/>
      </div>

      <Menu/>
    </>
  );
}

export default App;
