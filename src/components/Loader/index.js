import "./index.css";
function Loader(props) {
    return (
        <div className="wrapLoader" style={{display: props.isLoading ? 'block' : 'none'}}>
            <div className="loader"></div>
        </div>
    );
}

export default Loader;