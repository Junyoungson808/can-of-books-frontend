import axios from 'axios';
import React from 'react';
import {Carousel} from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async() => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let bookData = await axios.get(url);
      this.setState({
        books: bookData.data
      })

    } catch (error) {
      console.log('we have an error ', error.response);
    }
  }

componentDidMount() {
  this.getBooks();
}

  render() {
// let books = this.state.books.map(book => (
//   <p key={book._id}>{book.name} is a </p>
// ))

    /* TODO: render all the books in a Carousel */

    let carouselItems = this.state.books.map((value, index) => (
      <Carousel.Item key={index} value={value}>
        <img
          className="d-block w-100"
          src={"https://www.fillmurray.com/640/360"}
          alt={"Bill Murray"}
        />
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}> </h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
          <Carousel>
            {carouselItems}
          </Carousel>
          
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
