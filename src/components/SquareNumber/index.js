import {useState} from "react";

function SquareNumber() {
    const [squareNumber, setSquareNumber] = useState(1);

    function isSquare(number) {
        return number > 0 && Math.sqrt(number) % 1 === 0;
    }
    function findSquareNumber() {
        let number = squareNumber;
        while (true) {
            number++;
            if (isSquare(number)) {
                break;
            }
        }
        setSquareNumber(number);
    }

    return (
        <div>
            <h1>Square Number: {squareNumber}</h1>
            <button onClick={findSquareNumber}>Find Square Number</button>
        </div>
    );

}

export default SquareNumber;