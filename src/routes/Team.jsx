import React from "react";
import imgSrc from "../assets/images/team/avatar.png";
function Team() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            Our Team
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Meet the dedicated individuals behind our mission.
          </h2>
        </div>
        {/*  */}
      </div>

      <div className="rounded-3xl px-6 py-8 mt-10 sm:px-8 lg:px-12 flex flex-col items-center gap-6">
        <h3 className="text-5xl font-bold text-sky-700">Team members</h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 text-center sm:text-lg">
          Our team is made up of passionate professionals committed to creating
          positive change in the lives of women and communities across
          Afghanistan. With diverse backgrounds and expertise, we work together
          to drive our mission forward and make a lasting impact.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12 gap-6">
        <div className="flex flex-col w-34 h-34 items-center gap-4 col-span-1">
                  <img src={imgSrc} alt="founder image" className='rounded-full w-full h-full object-cover'/>
          <span>
            Founder of <abbr title="Poor Women Support Organization">PWSO</abbr>
          </span>
        </div>

        <div className="col-span-2">
          <h4>Ehsan Mohammadzai</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            corrupti, ipsam cumque ipsa officia ut laborum cupiditate architecto
            nihil? Placeat itaque quasi ratione unde ex asperiores a suscipit
            mollitia voluptas. Nemo fugiat debitis quam dicta adipisci? Dolore
            corporis recusandae unde. Itaque, atque repellendus excepturi
            provident quia repudiandae cupiditate ratione explicabo?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
