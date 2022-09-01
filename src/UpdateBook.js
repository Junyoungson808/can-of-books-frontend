import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class UpdateBook extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('111111111111111111111111111',this.props);

    let bookToUpdate = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
      _id: this.props.books._id,
      __v: this.props.books.__v
    }
    this.props.updateBooks(bookToUpdate);
  }

  render() {


return (


        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder={this.props.books.title} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="name" placeholder="Enter book description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Check type="checkbox" label="Check Read" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="_id">
            <Form.Control type="name" placeholder={this.props.books._id} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Book Now
          </Button>
        </Form>

)

  }
  
}

export default UpdateBook;
