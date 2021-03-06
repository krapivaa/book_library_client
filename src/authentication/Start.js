import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import '../App.css';

const Start = (props) => {
    return ( 
        <Container className="start-container">
            <Row>
                <Col md="8" >
                   <Signup updateToken={props.updateToken} />
                </Col>
                
                <Col md="4" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
         
        </Container>
     );
}
 
export default Start;

