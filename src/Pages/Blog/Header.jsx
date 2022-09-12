import React from 'react';

const Header = ({ Name, object, array }) => {
    // const {Name, object, array} = props;
    console.log('object', Name, object, array);


    // console.log(props);
    // console.log(props.Name);
    // console.log(props.object.name);
    // console.log(props.array);
    return (
        <div className='container'>
            <h1>Header</h1>
            <div>
                <span>Name:{object.name}</span>
                <br />
                <span>Roll:{object.roll}</span>
            </div>
        </div>
    )
}

export default Header;