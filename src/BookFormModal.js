import React from 'react';
import AddBook from './AddBook';




class BookFormModal extends React.Component {

    render() {

        return (
            <AddBook handleBookCreate={this.props.handleBookCreate} />
        )
    }
}

export default BookFormModal;