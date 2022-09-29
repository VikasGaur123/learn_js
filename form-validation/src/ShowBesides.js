import React from 'react';
function ShowBesides(props) {
    return (
        <>
        <h1>ShowValues</h1>
            <div>
                Name:
                <input value={props.inputValues.name} />
            </div><br />
            <div>
                Email:
                <input value={props.inputValues.email}/>
            </div><br />
            <div>
                Phone Number: <input value={props.inputValues.number}/>
            </div><br />
            <div>
                Meassage: <textarea value={props.inputValues.meassage}/>
            </div>
        </>
    );
}
export default ShowBesides;