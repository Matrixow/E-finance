import './App.css';
import UserInfo from './Uinfo';
import Menu from './Menu';
import Image from './UserImage';

function App() {
  return (
    <>
      <div className="Usercont">
      <UserInfo username="matrix" name="Ernest Ampem"/>
      <Image src="logo.svg"/>
      </div>
      <Menu/>
    </>
  );
}

export default App;
