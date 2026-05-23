import React from "react";
import logo from "../assets/pwso-logo.png";
import LeaderShip from "../components/leaderShip";
import vision from "../assets/images/about/vision.jpeg";
import mission from "../assets/images/about/mission.jpeg";
import goal from "../assets/images/about/goal.jpg";

const highlightCards = [
  {
    image: vision,
    title: "Our Vision",
    description:
      "Our vision is stretching and we believe, it will take decades to achieve in Afghanistan. However, we are determined and holding ourselves accountable with clear, stretching and measurable goals. It strengthens our commitment and passion for the people we serve-today and in the future. ",
  },
  {
    image: mission,
    title: "Our Mission",
    description:
      "PWSO mission is to implement social, welfare, women empowerment, health and research projects, which will contribute towards educated, peaceful, socially & economically developed Afghanistan. ",
  },
  {
    image: goal,
    title: "Our Goal",
    description:
      "To empower Afghan communities—especially women and vulnerable groups—through education, health, social welfare, and research initiatives that foster peace, equity, and sustainable socio-economic development, while building long-term partnerships with national and international stakeholders to create lasting positive change for current and future generations.",
  },
];

function About() {
  return (
    <section className="min-h-screen bg-slate-50 px-4 pb-16 pt-28 sm:px-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 px-6 py-8 shadow-sm ring-1 ring-sky-100 sm:px-8 lg:px-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700">
            About PWSO
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Supporting women and communities with dignity, care, and long-term
            opportunity.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Learn who we are, what drives our work, and how we create meaningful
            change across Afghanistan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-6 py-10 text-center shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 rounded-3xl bg-sky-50 p-4">
              <img
                src={logo}
                alt="PWSO logo"
                className="h-28 w-28 object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-sky-700">
              Poor Women Support Organization
            </h3>
            <p className="mt-3 max-w-xs text-base leading-7 text-slate-600">
              Seizing opportunities and maximizing impact through community-led
              development.
            </p>
          </div>

          <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-slate-200 sm:px-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Our Story
            </p>
            <div className="mt-4 space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                The Poor Women Support Organization (PWSO) is a non-profit,
                non-governmental organization established in 2017 under License
                No. 4203 with the Ministry of Economy in Afghanistan. Founded by
                dedicated and highly qualified young professionals, PWSO was
                created to help build an educated, aware society free from
                poverty and illiteracy.
              </p>
              <p>
                Our work focuses on women&apos;s health, education, rights,
                economic empowerment, agriculture, climate change, and research.
                Through these areas, we support sustainable social and economic
                development while making sure underserved communities are not
                left behind.
              </p>
              <p>
                With strong experience in project implementation, reproductive
                health, rights advocacy, monitoring, evaluation, and data
                analysis, our team combines technical expertise with grassroots
                credibility and evidence-based programming.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {highlightCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold text-white">
                  {card.title}
                </h3>
              </div>
              <div className="px-6 py-6">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <LeaderShip />
      </div>
    </section>
  );
}

export default About;
