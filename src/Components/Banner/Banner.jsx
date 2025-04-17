import React from "react";
import bannerImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-around py-[70px] bg-gray-200 rounded-xl my-[50px] work-sans">
      <div>
        <div className="sm:ml-5 md:ml-10 lg:ml-0 sm:pb-10 lg:pb-0">
          <h1 className="text-5xl font-bold my-[70px]">
            Books to freshen up
            <br />
            your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
      <div>
        <img className="rounded-xl sm:ml-5 md:ml-10 lg:ml-0" src={bannerImage} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
