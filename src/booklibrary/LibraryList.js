import React from 'react';
import {Table, Button} from 'reactstrap';
import '../App.css'
import APIURL from '../helpers/environment';

const LibraryList = (props) => {

  const deleteBook = (book) => {
    fetch(`${APIURL}/api/booklist/delete/${book.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchLibrary())
}


  const bookMapper = () => {
    return props.library.map((book, index) => {
        return(
         
            <tr key={index}>
                {/* <th scope="row">{book.id}</th> */}
                {console.log(book.photo)}
                <td>{book.date}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.notes}</td>
                <td>{book.haveRead ? "Yes" : "No"}</td>
                <td>{book.willRead ? "Yes" : "No"}</td>
                <td><img src={book.photo} width="70" object-fit="cover" /></td>
                
                <td>
                  <Button outline color="success" className="buttonUpdate" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>

                    <Button outline color="secondary " className="buttonDelete" onClick={() => {deleteBook(book)}}>Delete Book</Button>
                </td>
                </tr>
           
            
            
        )
    })
}


    return ( 
        <div>
            {/* <h3>Library</h3> */}
            <Table hover responsive style={{backgroundColor: 'white', padding: '5px', textAlign: 'center', verticalAlign: 'middle', margin: '5px'}}>
      <thead>
        <tr >
          {/* <th>#</th> */}
          <th>Date</th>
          <th>Author</th>
          <th>Title</th>
          <th>Notes</th>
          <th>Have Read</th>
          <th>Will Read</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {bookMapper()}
      </tbody>
    </Table>
        </div>
     );
}
 
export default LibraryList;