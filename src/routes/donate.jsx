import React from "react";

function Donate() {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center px-4 py-20">
      <div className="flex flex-col items-start max-w-3xl gap-6">
        <h1 className="text-5xl font-bold text-black text-center w-full">
          Donate
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Your donation helps us deliver critical programs across education,
          healthcare, and community resilience. Thank you for joining us in
          supporting Afghan women and children.
        </p>
      </div>
    </div>
  );
}

export default Donate;
