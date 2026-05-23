import React from "react";

const leadershipPoints = [
  "Community-based planning rooted in local realities",
  "Transparent implementation with accountable reporting",
  "Research-informed decisions that strengthen long-term impact",
];

function LeaderShip() {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-10 text-white shadow-sm sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Leadership
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Guided by experienced professionals committed to measurable change.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Our leadership team brings program expertise, operational discipline,
          and a strong commitment to advancing the rights and wellbeing of
          women, girls, and vulnerable communities.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {leadershipPoints.map((point) => (
          <div
            key={point}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm"
          >
            <p className="text-sm leading-7 text-slate-200">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeaderShip;
