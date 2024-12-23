"use client";
import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Component {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const ClientPage = () => {
  const [details, setdetails] = useState<Component[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const data: Component[] = await fetchData.json();
      setdetails(data);
      setLoading(false);
    };
    GetData();
  }, []);

  return (
    <div className=" flex min-h-screen justify-center  item-center bg-slate-50 py-10 gap-5 ">
      {
        loading ? (
          <ThreeDots
            visible={true}
            height="100"
            width="100"
            color="#04000d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <div className=" flex justify-center py-3 flex-col gap-5  items-center">
            <h1 className=" text-4xl text-center font-bold">
              Client Side Data Fetching
            </h1>
            <div className="grid md:grid-cols-2 gap-7  xl:grid-cols-3 ">
              {details.map((product, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-3 justify-center items-center rounded-xl py-5 w-[330px] sm:w-[400px] shadow-xl bg-white"
                >
                  <div className="h-[60%] flex justify-center items-center">
                    <img
                      src={product.image}
                      alt="image"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className=" flex gap-3 p-4  flex-col">
                    <h3 className="line-clamp-1 overflow-hidden text-2xl font-semibold">
                      {product.title}
                    </h3>
                    <p className="line-clamp-2 overflow-hidden">
                      {product.description}
                    </p>

                    <p className="text-2xl font-bold">${product.price}</p>
                    <div>
                      <Image
                        src={"/images/star.svg"}
                        alt="star"
                        width={63}
                        height={9}
                      />
                      <span className=" text-lg text-gray-700">
                        Rating: {product.rating.rate}
                      </span>
                      <span className="ml-2 text-lg  text-gray-700">
                        ({product.rating.count} Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) 
      }
    </div>
  );
};

export default ClientPage;
