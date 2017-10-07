export function getBooks(book) {
    return { type: "GET_BOOK" }
}
export function postBooks(book) {
    return {
        type: "POST_BOOK",
        payload: book
    }
}
export function updateBooks(book) {

    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}

export function deleteBooks(book) {
    return {
        type: "DELETE_BOOK",
        payload: book.id
    }
}
