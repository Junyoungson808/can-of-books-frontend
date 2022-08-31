import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class UpdateBook extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    let bookToUpdate = {
      title: e.target.title.book,
      description: e.target.description.book,
      status: e.target.status.checked,
      _id: this.props.book._id,
      __v: this.props.book.__v,
    }
    this.props.UpdateBook(bookToUpdate);
  }

  render() {


return (


        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="name" placeholder="Enter book description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Check type="checkbox" label="Check Read" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Check type="checkbox" label="Check Read" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Book Now
          </Button>
        </Form>

)

  }
  
}

export default UpdateBook;
