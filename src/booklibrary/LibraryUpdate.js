import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import APIURL from '../helpers/environment';
import '../App.css'


const LibraryUpdate = (props) => {
const [updateDate, setUpdateDate] = useState(props.bookToUpdate.date);
const [updateAuthor, setUpdateAuthor] = useState(props.bookToUpdate.author);
const [updateTitle, setUpdateTitle] = useState(props.bookToUpdate.title);
const [updateNotes, setUpdateNotes] = useState(props.bookToUpdate.notes);
const [updateHaveRead, setUpdateHaveRead] = useState(props.bookToUpdate.haveRead);
const [updateWillRead, setUpdateWillRead] = useState(props.bookToUpdate.willRead);
const [updatePhoto, setUpdatePhoto] = useState(props.bookToUpdate.photo);

const bookUpdate = (event, book) => {
    event.preventDefault();
    fetch(`${APIURL}/api/booklist/update/${props.bookToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({books: {date: updateDate, author: updateAuthor, title: updateTitle, notes: updateNotes, haveRead: updateHaveRead, willRead: updateWillRead, photo: updatePhoto}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => {
        props.fetchLibrary();
        props.updateOff();
    })
}
const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);


    return ( 
        <div>
            <Modal isOpen={true}>

            <ModalHeader>Update</ModalHeader>
            <ModalBody>
                <Form onSubmit={bookUpdate}>
                    <FormGroup>
                        <Label for="date">Edit Date:</Label>
                        <Input name="date" type="date" value={updateDate} onChange={(e) =>setUpdateDate(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="author">Edit Author:</Label>
                        <Input name="author" value={updateAuthor} onChange={(e) =>setUpdateAuthor(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="title">Edit Title:</Label>
                        <Input name="title" value={updateTitle} onChange={(e) =>setUpdateTitle(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="notes">Edit Notes:</Label>
                        <Input name="notes" value={updateNotes} onChange={(e) =>setUpdateNotes(e.target.value)}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="haveRead">Edit Have Read:</Label>
                        <Input type="select" name="haveRead" value={updateHaveRead} onChange={(e) =>setUpdateHaveRead(e.target.value)}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="willRead">Edit Will Read:</Label>
                        <Input type="select" name="willRead" value={updateWillRead} onChange={(e) =>setUpdateWillRead(e.target.value)}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="photo">Edit Photo:</Label>
                        <Input name="photo" value={updatePhoto} onChange={(e) =>setUpdatePhoto(e.target.value)}/>
                    </FormGroup>

                    <Button type="submit">Update</Button> 
                 
                    <Button outline color="secondary" className="buttonCancelUpdate">Cancel</Button>
                </Form>
            </ModalBody>

           

        </Modal>
        </div>
     );
}
 
export default LibraryUpdate;