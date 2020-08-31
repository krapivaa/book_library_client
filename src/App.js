import React, {useState, useEffect} from 'react';
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
      <div className="App">
          <Router>
            <Navigation clickLogout={clearToken} token={sessionToken} />
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