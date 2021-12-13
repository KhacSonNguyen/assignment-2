import "./index.css";
import {useEffect, useState} from "react";
function Model(props) {
    const [isOpen, setOpen] = useState(false);
    const [text, setText] = useState();
    function open() {
        setOpen(true);
    }
    function close() {
        setOpen(false);
    }

    function onTextChange(e) {
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" placeholder={"Type here"} onChange={onTextChange}/>
            <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={() => {close()}}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {open()}}>Show on model</button>
        </>
    );
}

export default Model;