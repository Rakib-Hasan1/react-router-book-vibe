import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="font-bold text-3xl text-center my-8">Books</h1>
      <Suspense fallback={<p className="py-4">Loading.....</p>}>
        <div className="my-20 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
