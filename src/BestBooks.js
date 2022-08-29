import axios from 'axios';
import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async() => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookData.data
      })

    } catch (error) {
      console.log('we have an error ',)
    }
  
  }


  render() {

    /* TODO: render all the books in a Carousel */

    let carouselItems = this.state.photoData.map((pic, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={pic.src}
          alt={pic.alt}
        />
        <Carousel.Caption>
          <h3 style={{ backgroundColor: 'teal', borderRadius: '5px', width: 'max-content', margin: 'auto', padding: '5px' }}>Photo by: {pic.artist}</h3>
        </Carousel.Caption>
      </Carousel.Item>

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
