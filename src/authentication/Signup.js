import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../helpers/environment';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
 

const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/user/signup`, {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password} }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((user) => {
            props.updateToken(user.sessionToken)
        })
    }

    return (
        <div>
       <div style={{padding: '10px', margin: '20px'}}> <h4>“Once you learn to read, you will be forever free.” 
            <br />– Frederick Douglass</h4>
        </div> 

        <h5 style={{padding: '10px', margin: '10px'}}>Don't have an account?
            <br />
             Please sign up below.</h5>

       <Button onClick={toggle} style={{backgroundColor: 'grey'}} >Sign up for an account</Button>
       <Modal isOpen={modal} toggle={toggle} className="signUp" external={externalCloseBtn}>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" minLength="5" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

        </div>
    )
}

export default Signup;
