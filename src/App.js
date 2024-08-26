import './App.css';
import UserInfo from './Uinfo';
import Menu from './Menu';
import Image from './UserImage';

function App() {
  return (
    <>
      <div className="Usercont">
      <UserInfo username="matrix" name="Ernest Ampem"/>
      <Image/>
      </div>
      <Menu/>
    </>
  );
}

export default App;
