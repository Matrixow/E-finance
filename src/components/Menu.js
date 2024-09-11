import { useNavigate } from "react-router-dom";

export default function Menu(){

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        const targetPage = event.target.textContent.toLowerCase();
        console.log("Clicked");
        navigate(`/${targetPage}`); // This is for client-side routing
    };

    return(
        <div className="menu-bottom">
            <div className="menu-item" onClick={handleClick}>Home</div>
            <div className="menu-item" onClick={handleClick}>Savings</div>
            <div className="menu-item" onClick={handleClick}>Budget</div>

        </div>

    )

}