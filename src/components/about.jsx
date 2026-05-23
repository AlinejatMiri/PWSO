import React from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/images/img4.jpeg";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20"
    >
      {/* Badge */}
      <div className="col-span-full">
        <span className="inline-block px-4 py-2 bg-sky-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg">
          Our History
        </span>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-5 order-2 lg:order-1">
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl leading-snug">
          Empowering Afghan women and girls, advancing human rights, and
          building sustainable pathways for peace and prosperity.
        </h3>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          The Poor Women Support Organization (PWSO) is a non-profit,
          non-governmental organization established in 2017 and registered with
          Afghanistan’s Ministry of Economy. Founded by a group of dedicated
          young professionals, PWSO works toward building an educated and aware
          society free from poverty and illiteracy creating a foundation for a
          peaceful and sustainable future. Our work focuses on women’s health,
          education, rights, economic empowerment, agriculture, and climate
          change.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Through strong field experience and research-driven approaches, we
          deliver impactful, accountable programs that support long-term social
          and economic development. PWSO operates across five core areas:
          Health, Economic Empowerment, Education, Research & MEAL, and
          Agriculture & Climate Change working together to strengthen
          communities and ensure no one is left behind.
        </p>

        <Link
          to="/about"
          className="w-fit px-4 py-2 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Know More
        </Link>
      </div>

      {/* Image */}
      <div className="order-1 lg:order-2 flex justify-center items-center">
        <div className="overflow-hidden rounded-lg w-full max-w-md lg:max-w-full">
          <img
            src={img4}
            alt="Girl going to school"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
