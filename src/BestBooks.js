import axios from "axios";
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let bookData = await axios.get(url);
      this.setState({
        books: bookData.data,
      });

    } catch (error) {
      console.log("we have an error ", error.response);
    }
  };

  handleBookCreate = async (bookInfo) => {
    console.log(bookInfo);
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/books`, bookInfo);
      const newBook = response.data;
      this.setState({
        books: [...this.state.books, newBook],
      });
    } catch (error) {
      console.log('error is book post: ', error.response);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleBookCreate({
      title: event.target.formTitle.value,
      description: event.target.formDescription.value,
      status: event.target.formStatus.checked,
    })
  }

  handleDelete = async (bookToDelete) => {
    try {
      // make axios.delete request
      const response = await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`);

      // console.log response.status
      console.log(response.status);

      // .filter on the front end
      const filteredBooks = this.state.books.filter(value => {
        return value._id !== bookToDelete._id;
      })

      this.setState({
        books: filteredBooks
      })

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log("^^^^^^^This is books", this.state.books);
    /* TODO: render all the books in a Carousel */
    let carouselItems = this.state.books.map((value, index) => (
      <Carousel.Item key={index} value={value}>
        <img className="d-block w-100" src={"https://www.fillmurray.com/640/360"} alt={"Bill Murray"} />
        <Carousel.Caption>
          {/* <h3 style={{backgroundColor: "teal", borderRadius: "5px", width: "max-content", margin: "auto", padding: "5px",}}></h3> */}
          <h3>{value.title}</h3>
          <p>{value.description}</p>
          <p>Available:{value.status}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))
      return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {
          this.state.books.length > 0 && 
          <>
            <Container>
              <Carousel>{carouselItems}</Carousel>
            </Container>
          </>  
        } 
        <h3>No Books Found</h3>

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
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default BestBooks;
