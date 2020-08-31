import React from 'react';
import { Button} from 'reactstrap';
import '../App.css'
import APIURL from '../helpers/environment';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import defaultphoto from '../assets/bookImage.jpg';

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
         
            <Tr key={index}>
                <Th scope="row">{index + 1}</Th>
                {/* {console.log(book.photo)} */}
                <Td>{book.date}</Td>
                <Td>{book.author}</Td>
                <Td>{book.title}</Td>
                <Td>{book.notes}</Td>
                <Td>{book.haveRead ? "Yes" : "No"}</Td>
                <Td>{book.willRead ? "Yes" : "No"}</Td>
                <Td><img src={book.photo ? book.photo : defaultphoto} width="70" className="imageBook" object-fit="cover" /></Td>
                
                <Td>
                  <Button outline color="success" className="buttonUpdate" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>

                    <Button outline color="secondary " className="buttonDelete" onClick={() => {deleteBook(book)}}>Delete Book</Button>
                </Td>
                </Tr>        
        )
    })
}


    return ( 
        <div>
            {/* <h3>Library</h3> */}
            <Table hover responsive style={{backgroundColor: 'white', opacity: '0.9', padding: '5px', textAlign: 'center', verticalAlign: 'middle', margin: '5px'}}>
      <Thead>
        <Tr >
          <Th></Th>
          <Th>Date</Th>
          <Th>Author</Th>
          <Th>Title</Th>
          <Th>Notes</Th>
          <Th>Have Read</Th>
          <Th>Will Read</Th>
          <Th>Photo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {bookMapper()}
      </Tbody>
    </Table>
        </div>
     );
}
 
export default LibraryList;