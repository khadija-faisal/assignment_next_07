import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center  bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center" >
      <div className="flex justify-center items-center text-center gap-7 shadow-lg px-7 mx-7 py-10 bg-slate-100 rounded-lg flex-col">
        <h1 className="text-4xl font-bold">Welcome to Data Fetching Page </h1>
        <p className="text-lg">here is  two different data fetching server-side-fetching and client-side-fetching </p>
        <div className=" flex flex-col md:flex-row gap-3">
          <button className=" bg-purple-800 hover:bg-purple-700 shadow-md text-white px-6 py-4 rounded-lg text-xl font-semibold "><Link href={'/clientside'}> Client-Side-Page</Link></button>
          <button className=" bg-violet-800 hover:bg-violet-700 shadow-md text-white px-6 py-4 rounded-lg text-xl font-semibold "><Link href={'/serverside'}> Server-Side-Page</Link></button>
        </div>
      </div>
    </div>
  );
}
