// import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';

const Home = () => {
    const [count, setCount] = React.useState(0);
    // console.log(count);

    const clickHandler = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }
    const dicTest = () => {
        // if (count > 0) {
        //     setCount(count - 1)
        // }
        setCount(count > 0 ? count - 1 : 0)
        console.log("dicTest")
    }


    return (
        <div className='container pt-5'>
            <h2>This is home {count}</h2>
            <button onClick={() => clickHandler()} className='m-1'>Increment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className='m-1'>Decrement</button>
            <button onClick={() => dicTest()} className='m-1'>Decrement Hand</button>
        </div>
    );
};

export default Home;