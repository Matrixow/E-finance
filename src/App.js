import './App.css';
import UserInfo from './models/Uinfo';
import Menu from './models/Menu';
import Image from './models/UserImage';
import Savings from './models/Savings';
import Budget from './models/Budget';

function App() {
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
        
      </div>

      <Menu/>
    </>
  );
}

export default App;
