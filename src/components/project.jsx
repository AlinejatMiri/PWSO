import React from "react";
import img from "./../assets/images/img4.jpeg";
import img2 from '../assets/heroimages/img2.jpeg';


function Project() {
  return (
    <section
  id="projects"
  className="w-full bg-blue-100 px-4 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20"
>
  {/* Header */}
  <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
    <span className="inline-block px-5 py-2 bg-sky-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-lg">
      What We Do
    </span>

    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
      Our <span className="text-sky-600">Key Focus Areas</span>
    </h2>

    <p className="text-sm md:text-lg text-neutral-600 leading-relaxed">
      From education initiatives to emergency support, we operate across
      various sectors to help every child in Afghanistan grow and succeed.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card */}
    <div className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-lg group">
      <img
        src={img}
        alt="Education"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
        
        <span className="w-fit bg-white/30 backdrop-blur-md px-2 py-1 rounded text-sm mb-2">
          🎓 Education
        </span>

        <h3 className="text-white text-lg md:text-xl font-semibold">
          Education Programs
        </h3>

        <p className="text-white/80 text-xs md:text-sm">
          Supporting access to quality education for children and communities.
        </p>
      </div>
    </div>

    {/* Duplicate cards (change content) */}
    <div className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-lg group">
      <img
        src={img}
        alt="Health"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
        <span className="w-fit bg-white/30 backdrop-blur-md px-2 py-1 rounded text-sm mb-2">
          🏥 Health
        </span>
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Health Services
        </h3>
        <p className="text-white/80 text-xs md:text-sm">
          Improving access to essential healthcare for vulnerable populations.
        </p>
      </div>
    </div>

    <div className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-lg group">
      <img
        src={img2}
        alt="Empowerment"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
        <span className="w-fit bg-white/30 backdrop-blur-md px-2 py-1 rounded text-sm mb-2">
          💼 Empowerment
        </span>
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Economic Empowerment
        </h3>
        <p className="text-white/80 text-xs md:text-sm">
          Supporting livelihoods and skills development for women.
        </p>
      </div>
    </div>

  </div>
</section>
  );
}

export default Project;
