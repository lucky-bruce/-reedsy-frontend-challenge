'use strict';

import Boom from 'boom';

import BooksService from '../../services/books/books-service';

function getBook(request, h) {
  const books = JSON.parse(BooksService.getAllBooks(request)).books;
  const book = books.find(b => b.slug === request.params.slug);
  if (!book) {
    throw Boom.notFound();
  }

  return book;
}

function getBooksList(request, h) {
  return BooksService.getAllBooks(request);
}

export default {
  getBook: getBook,
  getBooksList: getBooksList,
};
