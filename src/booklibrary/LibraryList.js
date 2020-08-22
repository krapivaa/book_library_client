import React from 'react';
import {Table, Button} from 'reactstrap';

const LibraryList = (props) => {

  const deleteBook = (book) => {
    fetch(`http://localhost:3007/api/booklist/delete/${book.id}`, {
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
                <td>{book.date}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.notes}</td>
                <td>{book.haveRead ? "Yes" : "No"}</td>
                <td>{book.willRead ? "Yes" : "No"}</td>
                <td>{book.photo}</td>
                <td>
                  <Button color="warning" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update</Button>

                    <Button color="danger" onClick={() => {deleteBook(book)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}


    return ( 
        <div>
            <h3>Library</h3>
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