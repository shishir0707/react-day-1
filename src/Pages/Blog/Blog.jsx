import React from 'react';
import Header from './Header';

export const name1 = 'Shishir';
export const sum = (a, b) => {
    return a + b;
}

const Blog = () => {
    const name = 'Shishir';
    const object2 = {name: 'Shishir', roll: 7}
    const testArr = [{name: 'Shishir', roll: 7}, "kim", 10, "Sharia"]
    return(
        <div className='container'>
            <h1>Blogs</h1>
            <h1>{name}</h1>
            <Header Name={name} object={object2} array={testArr}/>
        </div>
    )
}

export default Blog;