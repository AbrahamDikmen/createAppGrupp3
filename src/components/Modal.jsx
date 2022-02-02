import React from 'react';
import '../Styles/modal.css';


export default function Modal({ message, question, callback }) {

    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <p>{message}</p>
                <p>{question}</p>
                <button onClick={() => callback(true)}>Ok</button>
                <button onClick={() => callback(false)}>Avbryt</button>
            </div>
        </div>
    );
}