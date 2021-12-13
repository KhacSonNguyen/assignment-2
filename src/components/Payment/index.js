import {useEffect, useState} from "react";
import Card from "../Card";

function Payment() {
    const [quality, setQuality] = useState(1);
    const [total, setTotal] = useState(0);
    const [cardNumber, setCardNumber] = useState('');
    const [activeItemId, setActiveItemId] = useState();
    const listItem = [
        {
            id: 1,
            name: 'Programming basic',
            image: 'https://kbimages1-a.akamaihd.net/7ae0dcb0-f989-4b9c-8a87-5b69b86dccc4/1200/1200/False/c-programming-basics-learn-c-coding-for-beginners-book-1.jpg',
            price: 400000
        },
        {
            id: 2,
            name: 'Python programming',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41z1V0zP2WL.jpg',
            price: 500000
        },
        {
            id: 3,
            name: 'Clean code',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTTww5GqPvQe-5TdoFYCEWzEWe9qT2EdTTQ&usqp=CAU',
            price: 600000
        },
        {
            id: 4,
            name: 'Coding for kids',
            image: 'https://images-na.ssl-images-amazon.com/images/I/71d-G-ihrTL.jpg',
            price: 880000
        }
    ]
    function handleSubmit(e) {
        e.preventDefault();
        let currentItem = listItem.find(item => item.id === activeItemId)
        if (currentItem) {
            alert(`You just bought ${quality} book ${currentItem.name} with total ${total}  ₫`);
        }
    }
    function onActiveItem(id) {
        setActiveItemId(id);
    }

    const renderItems = listItem.map((item) => {
        return <Card
            key={item.id}
            value={item}
            isActive={activeItemId === item.id}
            onActiveItemFromParent={onActiveItem}
        />;
    })

    useEffect(() => {
        let currentItem = listItem.find(x => x.id == activeItemId);
        if (currentItem) {
            setTotal(currentItem.price * quality)
        }
    }, [activeItemId, quality])


    return (
        <div className="payment">
            <form action="" onSubmit={handleSubmit}>
                <h3 style={{textAlign: 'left', padding: '10px'}}>Step 1: Chose item</h3><br/>
                <div className="listItem">
                    {renderItems}
                </div>
                <div style={{clear: 'left', paddingTop: '30px'}}>
                    <h3>Step 2: Quality: </h3><input type="number" onChange={(e) => { setQuality(e.target.value) }} value={quality}/> <br/>
                    <h3>Step 3: Card info </h3><input type="text" onChange={(e) => { setCardNumber(e.target.value) }}/> <br/><br/>
                    <h4>Total: {total +  '₫'}</h4><br/>
                    <h3>Step 4: Submit </h3><br/>
                    <button type="submit">Buy!</button>
                </div>
            </form>
        </div>
    );
}

export default Payment;