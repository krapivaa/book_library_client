import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import LibraryCreate from './LibraryCreate';
import LibraryList from './LibraryList';
import LibraryUpdate from './LibraryUpdate'


const LibraryHome = (props) => {

const [library, setLibrary] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [bookToUpdate, setBookToUpdate] = useState({});
const [fetchUrl, setFetchUrl] = useState("http://localhost:3007/api/booklist/haveRead");
useEffect(() => {
    fetchLibrary ()
}, [fetchUrl]);

const fetchLibrary = () => {
    fetch(fetchUrl, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then( (res) => res.json())
    .then((logBook) => {
        setLibrary(logBook)
        //console.log(logBook);
    })
}

const editUpdateBook = (book) => {
    setBookToUpdate(book);
    console.log(book);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

useEffect(() => {
    fetchLibrary();
}, [])

    return ( 
        <Container>
            <Row>
                <Col md='3'>
                    <LibraryCreate fetchLibrary={fetchLibrary} token={props.token} />
                </Col>
                <Col md='9'>
                    <LibraryList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchLibrary={fetchLibrary} token={props.token} />
                </Col>
                {updateActive ? <LibraryUpdate bookToUpdate={bookToUpdate}
                updateOff={updateOff} token={props.token} fetchLibrary={fetchLibrary} /> : <></>}  
             </Row>
             <Button onClick={() => {
                 setFetchUrl("http://localhost:3007/api/booklist/mine")}}>Click Me</Button>

            <Button onClick={() => {
                 setFetchUrl("http://localhost:3007/api/booklist/haveRead")}}>HaveRead</Button>
        </Container>
     );
}
 
export default LibraryHome;