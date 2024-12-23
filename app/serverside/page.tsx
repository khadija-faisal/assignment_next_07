import React from "react";

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const ServerPage = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const data: Books[] = await response.json();

  return (
    <>
      <div className=" flex justify-center items-center flex-col text-center pt-10 gap-5 ">
        <h1 className=" text-4xl font-bold">Server Side Data Fetching</h1>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 px-5 py-10 gap-6 items-center justify-center ">
          {data.map((book, index) => (
            <div key={index} className="flex items-center justify-center  ">
              <div className=" flex  py-8 px-4 text-black gap-5 shadow-xl bg-white w-[300px] sm:w-[400px]  flex-col justify-center rounded-xl border items-center">
                <p className=" text-2xl font-bold p-3 shadow-md border rounded-lg  ">{book.name}</p>
                <p className=" text-lg">Type : {book.type}</p>
                <p
                  className={`${
                    book.available ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {book.available ? "Available" : "Unavailable"}
                </p>
                <button
                  className={`${
                    book.available ? "bg-purple-500" : "bg-slate-400 , cursor-not-allowed"
                  } px-6 py-3 text-white font-semibold rounded-lg`}
                >
                  {book.available ? "Read Now" : "can't read"}
                </button>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </>
  );
};

export default ServerPage;