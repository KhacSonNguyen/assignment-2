import logo from './logo.svg';
import './App.css';
import SquareNumber from "./components/SquareNumber";
import UserInfo from "./components/UserInfo";
import Model from "./components/Model";
import Payment from "./components/Payment";
import Loader from "./components/Loader";
import {useEffect, useState} from "react";
import ImageEffect from "./components/ImageEffect";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])
  return (
    <div className="App">
        <div style={{display: isLoading ? 'none' : 'block'}}>
            <SquareNumber/>
            <UserInfo/>
            <hr/>
            <Model/>
            <hr/>
            <Payment/>
            <hr/>
            <ImageEffect/>
        </div>
        <Loader isLoading={isLoading}/>
    </div>
  );
}

export default App;
