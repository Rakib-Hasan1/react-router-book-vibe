import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilities/AddToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const book = data.find((singleBook) => singleBook.bookId === bookId);
  const {
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleAddToRead = (id) => {
    addToStoredDB(id);
    MySwal.fire({
      title: "Good job!",
      text: "Book added in your Read List!",
      icon: "success"
    });
  };

  return (
    <div className="w-11/12 mx-auto work-sans my-20">
      <div className="flex flex-col md:flex-row gap-5 lg:gap-0 items-center justify-around">
        <div className="bg-gray-300 rounded-xl">
          <img
            className="max-w-[500px] max-h-[564px] object-cover rounded-lg p-10"
            src={image}
            alt="Book-Image"
          />
        </div>
        <div className="max-w-[549px]">
          <h3>{bookName}</h3>
          <p>By: {author}</p>
          {/* <div className="divider"></div> */}
          <p>{category}</p>
          <p>Review : {review}</p>
          {tags.map((tag, index) => (
            <p key={index}>#{tag}</p>
          ))}
          <div className="flex items-center justify-start gap-20">
            <div>
              <p>No. of Pages : </p>
              <p>Publisher: </p>
              <p>Year of Publishing: </p>
              <p>Rating:</p>
            </div>
            <div>
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <button onClick={() => handleAddToRead(id)} className="btn mr-5">
            Read
          </button>
          <button className="btn bg-[#59C6D2]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
