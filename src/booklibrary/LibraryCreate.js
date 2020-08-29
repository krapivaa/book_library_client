import React, {useState, useEffect, Fragment} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';
import '../App.css'

const LibraryCreate = (props) => {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const [haveRead, setHaveRead] = useState(true);   
    const [willRead, setWillRead] = useState(false);
    const [photo, setPhoto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/api/booklist/create`, {
            method: 'POST',
            body: JSON.stringify({books: {title: title, author: author, date: date, notes: notes, haveRead: haveRead, willRead: willRead, photo: photo}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logBook) => {
            console.log(logBook)
            setAuthor('');
            setTitle('');
            setDate('');
            setNotes('');
            setHaveRead(true);
            setWillRead(false);
            setPhoto('')
            props.fetchLibrary()
            props.toggle('1');
        })
    }

    return ( 
       
        <Fragment>
        <h3>Update your Library</h3>
        <Form onSubmit={handleSubmit}>

        <FormGroup>
                <Label for="date">Date</Label>
                <Input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="author">Author</Label>
                <Input name="author" value={author} onChange={(e) => setAuthor(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for='title'>Title</Label>
                <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="notes">Notes</Label>
                <Input name="notes" value={notes} onChange={(e) => setNotes(e.target.value)}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="haveRead">Have Read</Label>
                <Input type="select" name="haveRead" value={haveRead} onChange={(e) => setHaveRead(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for> Will Read</Label>
                <Input type="select" name="willRead" value={willRead} onChange={(e) => setWillRead(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="photo">Photo</Label>
                <Input name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)}></Input>
            </FormGroup>

            <Button type="submit" className="buttonSubmitCreate" >Submit</Button>

            <Button outline color="secondary" type="cancel" className="buttonCancelUpdate"onClick={ () => props.toggle('1')}>Cancel</Button>
            
        </Form>
    
        </Fragment>
     );
}
 
export default LibraryCreate;