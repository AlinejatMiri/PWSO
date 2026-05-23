import React from "react";
import { Link } from "react-router-dom";

function Motivation() {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center mt-10 text-center px-10 lg:px-40 py-10">
      <div className="w-full h-full bg-linear-to-b from-blue-600/70 to-blue-600/90 flex items-center flex-col justify-between rounded-[40px] px-10 py-5">
        <span className=" bg-sky-400 rounded-2xl text-slate-200 font-semibold px-3 py-2 mb-10">
          ✨ Create Impact
        </span>
        <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-100 font-bold mt-10">
          Ready to make a lasting difference?
        </h3>
        <p className="text-[20px] text-slate-300 font-semibold mt-10">
          Explore our programs and see how you can help drive meaningful change
          for children across Afghanistan.
        </p>
        <div className="w-full h-fit flex justify-center items-center flex-col md:flex-row gap-8 md:gap-20 lg:gap-30 mt-20">
          <Link
            to="/contact"
            className=" border-blue-100 border-1 px-5 py-3 bg-blue-100 rounded-2xl shadow-sm text-blue-500 font-semibold transition-transform duration-200 hover:scale-110 hover:bg-white"
          >
            Get Involved
          </Link>

          <Link
            to="/donate"
            className="border-blue-500 border-1 px-5 py-3 bg-blue-400 rounded-2xl shadow-sm text-white font-semibold transition-transform duration-200 hover:scale-110 hover:bg-blue-500 "
          >
            Become Donor
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
