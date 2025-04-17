import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utilities/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [ReadBooks, setReadBooks] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  const handleSort = (type) => {
    setSort(type);
    if(type === "Pages") {
      const sortByPage = [...ReadBooks].sort((a,b)=> a.totalPages - b.totalPages);
      setReadBooks(sortByPage);
    }
    if(type === "Ratings") {
      const sortByRatings = [...ReadBooks].sort((a,b)=> a.rating - b.rating);
      setReadBooks(sortByRatings);
    }

  };

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBookData = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookData.includes(book.bookId)
    );
    setReadBooks(myReadList);

  }, []);

  return (
    <>
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="w-11/12 mx-auto my-10">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {ReadBooks.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ReadList;
