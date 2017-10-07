"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/bookActions';
import { bindActionCreators } from 'redux';

import {Grid, Well, Button, Row, Col, Column} from 'react-bootstrap';

import { BookItem } from './bookItem';

//class BookItem extends React.Component {
//    render() {
//        return (
//            <Well>
//                <Row>
//                    <Col xs={12}>
//                        <h6>{this.props.title}</h6>
//                        <p>{this.props.description}</p>
//                        <h6>eur. {this.props.price}</h6>
//                        <Button bsStyle="primary">Buy now</Button>
//                    </Col>
//                </Row>
//            </Well>
//        )

//    }
//}

class BooksList extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const booksList = this.props.books.map(function(book) {
            return (
                <Col xs={12} sm={6} md={4} key={book.id}>
                    <BookItem
                        id={book.id}
                        title={book.title}
                        description={book.description}
                        price={book.price} />
                </Col>
            )
        })

        return (
            <Grid>
                <Row classStyle={{topMargin: '15px'}}>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
