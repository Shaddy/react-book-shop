"use strict"

export function booksReducers(state={books:[{
        id: 1,
        title: 'First Book',
        description: 'This will be the first book of the Webapp!!!',
        price: 44.33
    }, {
        id: 2,
        title: 'Second Book',
        description: 'second books were never that good',
        price: 44.33,
    }, {
        id: 3,
        title: 'Third Book',
        description: 'this is the book description',
        price: 44.33,
    }]}, action) {
    switch (action.type) {
        case "GET_BOOK":
            return {...state, books:[...state.books]}
            break;

        case "POST_BOOK":
            return {books: [...state.books, ...action.payload]}
            break;

        case "UPDATE_BOOK":
            const currentBookToUpdate = [...state.books];

            const indexToUpdate = currentBookToUpdate.findIndex(
                function(book) {
                    return book.id === action.payload.id;
                }
            )

            const newBook = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }

            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBook, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
            break;

        case "DELETE_BOOK":
            const currentBookToDelete = [...state.books];

            const indexToDelete = currentBookToDelete.findIndex(
                function(book) {
                    return book.id === action.payload.id;
                }
            )

            return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
            break;
        default:
            return state;

    }
}
