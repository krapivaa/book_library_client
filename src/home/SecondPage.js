// import React, {useState, useEffect} from 'react';
// import LibraryHome from '../booklibrary/LibraryHome';
// import Start from '../authentication/Start';
// import Navigation from './Navigation'
////import Book from '../assets/book.jpg'//

// const SecondPage = () => {
//     const [sessionToken, setSessionToken] = useState('');

//     useEffect(() => {
//       if (localStorage.getItem('token')) {
//         setSessionToken(localStorage.getItem('token'))
//       }
//     }, []);
    
//     const updateToken = (newToken) => {
//       localStorage.setItem('token', newToken);
//       setSessionToken(newToken);
//       console.log(newToken);
//     }
  
//     const clearToken = () => {
//       localStorage.clear();
//       setSessionToken('');
//     }
  
//     const protectedViews = () => {
//       return (sessionToken === localStorage.getItem('token') ? <LibraryHome token={sessionToken} /> : <Start updateToken={updateToken} />)
//     }

//     return ( 
//         <div>
//             <div>
          
//           {protectedViews()}
         
//         </div>
//         </div>
//      );
// }
 
// export default SecondPage;