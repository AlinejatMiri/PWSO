import React from "react";

function Donors() {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center px-4 py-20">
      <div className="flex flex-col items-start max-w-3xl gap-6">
        <h1 className="text-5xl font-bold text-black text-center w-full">
          Donors
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Thank you for your support. This page shares information about the
          individuals, organizations, and community partners who help make our
          work possible.
        </p>
      </div>
    </div>
  );
}

export default Donors;
