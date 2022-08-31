import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddBook extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleBookCreate({
      title: event.target.formTitle.value,
      description: event.target.formDescription.value,
      status: event.target.formStatus.checked,
      
    })
  }

  render() {


return (

    <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Enter book title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="name" placeholder="Enter book description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatus">
            <Form.Check type="checkbox" label="Check availability" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Book
          </Button>
        </Form>

)

  }
  
}

export default AddBook;
