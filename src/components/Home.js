import UserInfo from './Uinfo';
import Menu from './Menu';
import Image from './UserImage';
import Savings from './Savings';
import Budget from './Budget';
import Moneyavailable from './Moneyavailable';
import Calculator from './Savingscalculator';
import { useEffect, useState } from 'react';




export default function Home(){
  let [name, setName] = useState("");
  let [username, setUsername] = useState("")
  const details = localStorage.getItem("userdetails")

  useEffect(()=>{

    const checkuserdetails = ()=>{
      if(!localStorage.getItem("userdetails")){
        let name = prompt("Enter your name");
        let uname = prompt("Enter your username");
        localStorage.setItem("userdetails", JSON.stringify({name:name, uname:uname}))
      }

      if(localStorage.getItem("userdetails")){
        let details = JSON.parse(localStorage.getItem("userdetails"))
        setName(details.name)
        setUsername(details.uname)
      }
      else{
        checkuserdetails()
      }
    }

    checkuserdetails()

  }, [details])

    return (


        <div>
      <div className="Usercont">
      <UserInfo username={username || "Username"} name={name || "Fullname"}/>
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
    </div>
    )
}