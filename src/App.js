import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './home/Navbar';
import Start from './authentication/Start';
import LibraryHome from './booklibrary/LibraryHome'



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
    <div className="App">

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
       
        <div>
          <Navigation clickLogout={clearToken} token={sessionToken} />
          {protectedViews()}
        </div>

    </div>
  );
}

export default App;