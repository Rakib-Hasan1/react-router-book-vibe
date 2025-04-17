import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, category, image, rating, tags,bookId } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="my-7 work-sans">
        <div className="card bg-base-100 w-96 border border-gray-300">
          <figure className="bg-gray-200 p-4 m-5 rounded-b-lg">
            <img
              className="max-w-[125px] h-[170px] object-cover rounded-md"
              src={image}
              alt="Book Image"
            />
          </figure>
          <div className="card-body">
            <div>
              {tags.map((tag, index) => (
                <button
                  className="mr-6 bg-gray-50 rounded-full px-3 py-1 font-medium text-[#23BE0A]"
                  key={index}
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title text-2xl my-2">{bookName}</h2>
            <p className="font-medium">By: {author}</p>
            <span className="border border-dashed border-gray-300"></span>
            <div className="card-actions justify-between items-center">
              <div className="font-medium">{category}</div>
              <div className="font-medium flex items-center">
                <p className="font-medium">{rating}</p>
                <p className="ml-1 -mt-0.5">
                  <FaRegStar size={18} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
