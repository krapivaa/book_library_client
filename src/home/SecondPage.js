import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from 'react-router-dom';
//import Book from '../assets/book.jpg'//

const SecondPage = () => {
    

    return ( 
        <div className="secondPage"> 
        
        <Button outline color="success" style={{padding: '15px', margin: '10px', backgroundColor: 'white', opacity: '0.7'}}>
        <Link to='/' style={{color: 'green'}}><h5>Back to Library!</h5></Link>
        </Button>

        <div className="transbox">
            <h3 style={{color: 'olivedrab', fontWeight: 'bold'}}>Open A Book.<br />
            <br />
               
                Open a book<br />
                And you will find<br />
                People and places of every kind;<br />
                Open a book<br />
                And you can be<br />
                Anything that you want to be;<br />
                Open a book<br />
                And you can share<br />
                Wondrous worlds you find in there;<br />
                Open a book<br />
                And I will too<br />
                You read to me<br />
                And I’ll read to you.
                </h3>
                <i style={{color: 'olivedrab'}}>By Jane Baskwill</i>
                         
        </div>
        </div>
     );
}
 
export default SecondPage;