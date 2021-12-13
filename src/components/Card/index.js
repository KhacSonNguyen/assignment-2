import "./index.css"

function Card(props) {

    function onActiveItem() {
        props.onActiveItemFromParent(props.value.id);
    }
    return (
        <div className={'card ' + (props.isActive ? "activeCard" : "")} onClick={onActiveItem}>
            <img src={props.value.image} alt="Avatar" style={{width: '100px', height: '180px'}}/>
            <h4><b>{props.value.name}</b></h4>
            <p>{props.value.price} ₫</p>
        </div>
    );
}

export default Card;