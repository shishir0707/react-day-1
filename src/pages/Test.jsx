import React from 'react';
import MainBtn from '../components/ui-components/Button/MainBtn';

const Test = () => {
    const clickHandler = (e) => {
        console.log(e);
    }
    const secondHan = e => {
        console.log(e);
    }
    return (
        <div>
            <h1>Test</h1>

            <MainBtn btnText="Hover Me" clickHandler={secondHan} />
            <br />
            <MainBtn  className="text-danger" btnText="Click Me" clickHandler={clickHandler} />
            <br />
            <button type="" onClick={(e) => clickHandler()} className='text-danger'>Click me</button>
        </div>
    );
};

export default Test;