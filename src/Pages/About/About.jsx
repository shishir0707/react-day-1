// import React from 'react';
import { queryAllByAttribute } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';


const About = () => {
    const [user, setUser] = React.useState({
        name: 'Shishir',
        desc: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        roll: 7
    });


    const [getFromData, setFromData] = React.useState({});
    const [formErr, setFormErr] = useState({
        name: false,
        desc: false,
        roll: false
    })


    const getData = (e) => {
        // console.log(e);
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() })

        getFromData.name && setFormErr({ name: false });
    }

    const handleSubmit = () => {
        console.log(getFromData);
        // alert('Test')
        setUser(getFromData);
        if (!getFromData.name) {
            setFormErr({ name: true })
        } else {
            setFormErr({ name: false })
        }

        // if (!getFromData.desc) {
        //     setFormErr({ desc: true })
        // } else {
        //     setFormErr({ desc: false })
        // }


        //     if (!getFromData.roll) {
        //         setFormErr({ roll: true })
        //     } else {
        //         setFormErr({ roll: false })
        //     }
    }

    if (!getFromData.name || !getFromData.desc || !getFromData.roll) {
        // console.log(!getFromData.name , !getFromData.desc , !getFromData.roll);
        // console.log(!getFromData.name ? "name nai" : !getFromData.desc ? "desc  nai" : "roll nai");
        // console.log(!getFromData.name ? "name nai": "");
        // console.log(!getFromData.desc ? "desc nai": "");
        // console.log(!getFromData.roll ? "roll nai": "");

        const NAME = !getFromData.name ? "Name, " : "";
        const DESC = !getFromData.desc ? "Description, " : "";
        const ROLL = !getFromData.roll ? "Roll, " : "";


        // alert(`plz fill the input ${NAME} ${DESC} ${ROLL}`);

    } else {
        setUser(getFromData);
    }

    return (
        <div className='container'>
            <h1>This is About</h1>
            <div className='userInput pb-3' style={{ maxWidth: '300px' }}>
                <label htmlFor="name" className='d-flex flex-column'>
                    Name:
                    <input id="name" name="name" type="text" placeholder='Enter name' onChange={(e) => getData(e)} />
                    {formErr.name && <span className='text-danger'>Name is required</span>}
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Description:
                    <textarea id="desc" name="desc" type="text" placeholder='Enter desc' onChange={(e) => getData(e)} />
                    {/* {formErr.desc && <span className='text-danger'>Description is required</span>} */}
                </label>

                <label htmlFor="name" className='d-flex flex-column'>
                    Roll:
                    <input id="roll" name="roll" type="number" placeholder='Enter roll' onChange={(e) => getData(e)} />
                    {/* {formErr.roll && <span className='text-danger'>Roll is required</span>} */}
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