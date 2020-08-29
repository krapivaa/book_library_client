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
          
            <tr key={index} style={{backgroundColor: 'white'}}>
                {/* <th scope="row">{book.id}</th> */}
                <td>{book.date}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.notes}</td>
                <td>{book.haveRead ? "Yes" : "No"}</td>
                <td>{book.willRead ? "Yes" : "No"}</td>
                <td> <img src="{book.photo}" /></td>
                <td>
                  <Button outline color="info" className="buttonUpdate" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>

                    <Button outline color="secondary " className="buttonDelete" onClick={() => {deleteBook(book)}}>Delete Book</Button>
                </td>
            </tr>
            
        )
    })
}


    return ( 
        <div>
            {/* <h3>Library</h3> */}
            <Table hover bordered>
      <thead>
        <tr>
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