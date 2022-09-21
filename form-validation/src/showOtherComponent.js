import React from 'react';
function ShowValue(props) {
    return (




        //<div> {props.name}</div>
        <>
            <div>
                Name: {props.name}
            </div><br />
            <div>
                Email: {props.email}
            </div><br />
            <div>
                Phone Number: {props.number}
            </div><br />
            <div>
                Meassage: {props.meassage}
            </div>
        </>
    );
}
export default ShowValue;