// import React from 'react';
import React from 'react';
// import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';


const About = () => {
    const [user, setUser] = React.useState({
        name: 'Shishir',
        desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        roll: 7
    });


    const [getFromData, setFromData] = React.useState({});


    const getData = (e) => {
        // console.log(e);
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() })
    }

    const handleSubmit = () => {
        console.log(getFromData);
        // alert('Test')
        setUser(getFromData)
    }

    return (
        <div className='container'>
            <h1>This is About</h1>
            <div className='userInput pb-3' style={{ maxWidth: '300px' }}>
                <label htmlFor="name" className='d-flex flex-column'>
                    Name:
                    <input id="name" name="name" type="text" placeholder='Enter name' onChange={(e) => getData(e)} />
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Description:
                    <textarea id="desc" name="desc" type="text" placeholder='Enter desc' onChange={(e) => getData(e)} />
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Roll:
                    <input id="roll" name="roll" type="text" placeholder='Enter roll' onChange={(e) => getData(e)} />
                </label>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user?.name}</Card.Title>
                    <Card.Text>
                        {user.desc}
                    </Card.Text>
                    <Button variant="primary">{user.roll}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;