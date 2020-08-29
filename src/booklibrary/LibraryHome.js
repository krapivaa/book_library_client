import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, TabContent, TabPane, Nav,NavItem, NavLink, Card, CardTitle, CardText} from 'reactstrap';
import LibraryCreate from './LibraryCreate';
import LibraryList from './LibraryList';
import LibraryUpdate from './LibraryUpdate';
import classnames from 'classnames';
import '../App.css';
import APIURL from '../helpers/environment'


const LibraryHome = (props) => {

const [library, setLibrary] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [bookToUpdate, setBookToUpdate] = useState({});
const [fetchUrl, setFetchUrl] = useState(`${APIURL}/api/booklist/haveRead`);

const [activeTab, setActiveTab] = useState('1');
const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

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
        <Container className="themed-container containerLibraryHome" fluid="lg" style={{color: 'salmon'}} >
            
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }} style={{color: 'olive'}}
          >
            <h4>My library</h4>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }} style={{color: 'olive'}}
          >
            <h4>Create book entry</h4>
            
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>

          <Col md='10' style={{color: 'black', padding: '20px', margin: '10px'}}>
            <h4>“We lose ourselves in books. We find ourselves there too.”</h4>
          </Col>

        <Col md='3'>
                <Button color="success"  className="buttonAllBooks" onClick={() => {
                 setFetchUrl(`${APIURL}/api/booklist/mine`)}}>All books</Button>

                 </Col>

                 <br/>
                 <br/>
                 <Col>

                <Button color="success" className="buttonHaveRead" onClick={() => {
                 setFetchUrl(`${APIURL}/api/booklist/haveRead`)}}>The books I have read</Button>

                </Col>

                </Row>
<Row>
                <Col md='9'>
                    <LibraryList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchLibrary={fetchLibrary} token={props.token} />

                    </Col>


                    {/* <Col md='3'>
                <Button color="success" className="buttonMyBookLibrary" onClick={() => {
                 setFetchUrl(`${APIURL}/api/booklist/mine`)}}>My Book Library</Button>

                 <br/>
                 <br/>

                <Button color="success" className="buttonHaveRead" onClick={() => {
                 setFetchUrl(`${APIURL}/api/booklist/haveRead`)}}>The books I have read</Button>

                </Col> */}
                </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="10">
              <Card body>
                <CardTitle></CardTitle>
                <CardText> 
                     <Col md='12'>
                    <LibraryCreate fetchLibrary={fetchLibrary} token={props.token} toggle={toggle} />
                   </Col>
                </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>




                {/* <Row>
                <Col md='9'>
                    <LibraryList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchLibrary={fetchLibrary} token={props.token} />

                <Button color="success" onClick={() => {
                 setFetchUrl("http://localhost:3007/api/booklist/mine")}}>My Book Library</Button>

                 <br/>
                 <br/>

                <Button color="success" onClick={() => {
                 setFetchUrl("http://localhost:3007/api/booklist/haveRead")}}>The books I have read</Button>

                </Col>
                </Row> */}


                {updateActive ? <LibraryUpdate bookToUpdate={bookToUpdate}
                updateOff={updateOff} token={props.token} fetchLibrary={fetchLibrary} /> : <></>} 

             

           

        </Container>
        
     );
}
 
export default LibraryHome;




// import React, {useState, useEffect} from 'react';
// import {Container, Row, Col, Button} from 'reactstrap';
// import LibraryCreate from './LibraryCreate';
// import LibraryList from './LibraryList';
// import LibraryUpdate from './LibraryUpdate'


// const LibraryHome = (props) => {

// const [library, setLibrary] = useState([]);
// const [updateActive, setUpdateActive] = useState(false);
// const [bookToUpdate, setBookToUpdate] = useState({});
// const [fetchUrl, setFetchUrl] = useState("http://localhost:3007/api/booklist/haveRead");
// useEffect(() => {
//     fetchLibrary ()
// }, [fetchUrl]);

// const fetchLibrary = () => {
//     fetch(fetchUrl, {
//         method: 'GET',
//         headers: new Headers ({
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         })
//     }).then( (res) => res.json())
//     .then((logBook) => {
//         setLibrary(logBook)
//         //console.log(logBook);
//     })
// }

// const editUpdateBook = (book) => {
//     setBookToUpdate(book);
//     console.log(book);
// }

// const updateOn = () => {
//     setUpdateActive(true);
// }

// const updateOff = () => {
//     setUpdateActive(false);
// }

// useEffect(() => {
//     fetchLibrary();
// }, [])

//     return ( 
//         <Container className="themed-container containerLibraryHome" fluid="lg" style={{color: 'salmon'}} >
//             <Row>
               
//                 <Col md='3'>
//                     <LibraryCreate fetchLibrary={fetchLibrary} token={props.token} />
//                 </Col>


//                 <Col md='9'>
//                     <LibraryList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchLibrary={fetchLibrary} token={props.token} />

//                 <Button color="success" onClick={() => {
//                  setFetchUrl("http://localhost:3007/api/booklist/mine")}}>My Book Library</Button>

//                  <br/>
//                  <br/>

//                 <Button color="success" onClick={() => {
//                  setFetchUrl("http://localhost:3007/api/booklist/haveRead")}}>The books I have read</Button>

//                 </Col>


//                 {updateActive ? <LibraryUpdate bookToUpdate={bookToUpdate}
//                 updateOff={updateOff} token={props.token} fetchLibrary={fetchLibrary} /> : <></>} 

//              </Row>

           

//         </Container>
//      );
// }
 
// export default LibraryHome;