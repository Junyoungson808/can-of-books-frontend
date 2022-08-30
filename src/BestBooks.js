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
    console.log('^^^^^^^This is books',this.state.books);

// let books = this.state.books.map(book => (
//   <p key={book._id}>{book.name} is a </p>
// ))

    /* TODO: render all the books in a Carousel */

    let carouselItems = this.state.books.map((value, index) => (
      <Carousel.Item key={index} value={value}>
        <img
          className="d-block w-100"
          src={"https://www.fillmurray.com/640/360"}
          alt={'Bill murray'}
        />
        <Carousel.Caption>
          <p>{value.title}</p>
          <p>{value.description}</p>
          <p>Available:{value.status}</p>
          
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
