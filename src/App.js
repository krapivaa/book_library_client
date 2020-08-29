import React, {useState, useEffect} from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navigation from './home/Navigation';
import Start from './authentication/Start';
import LibraryHome from './booklibrary/LibraryHome'
import Footer from './home/Footer';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
import SecondPage from './home/SecondPage';





function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <LibraryHome token={sessionToken} /> : <Start updateToken={updateToken} />)
  }
   

  return (
    <div>

      {/* <header className="App-header">
        
        <p>
         Hello Book Lover!
        </p>
        {/* <a
          className="App-link"
          href="https://www.yourbosomfriend.com/wp-content/uploads/2020/03/Books-768x576.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read!
        </a> */}
        {/* <div>
          <Navigation clickLogout={clearToken} />
          {protectedViews()}
        </div>
      // </header> */} 
         
        <div className="App">
          <Router>
            <Navigation clickLogout={clearToken} token={sessionToken} />

            <div>            
                
                  {/* <Link to='/secondpage' style={{float: "right", marginRight: '20px', padding: '5px', color: 'olive'}}><h3>Inspiration</h3></Link> */}
                  {/* <Link to='/'>Library</Link> */}
                       
            </div>


          <Switch>
            <Route exact path="/">
            {protectedViews()}
            </Route>

            <Route path="/secondpage">
              <SecondPage />
            </Route>
          </Switch>
         
        </Router>
        </div>
        
        
        <Footer />
        

      </div>
  );
}

export default App;