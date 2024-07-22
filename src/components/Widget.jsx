import React from "react";

export default function Widget() {
  return (
    <div className="bg-teal-700 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          Learn About Our Priorities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-blue-500"
                src="https://placehold.co/100x100"
                alt="Food Security"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Food Security</h3>
            <p className="text-zinc-700 mb-4">
              Food security is defined when all people, at all times, have
              physical and economic access to sufficient safe and nutritious
              food that meets their dietary needs and food preferences for an
              active and healthy life.
            </p>
            <ul className="list-disc list-inside text-blue-500">
              <li>
                <a href="#" className="hover:underline">
                  Food Security Update
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Global Food & Nutrition Security Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Preparedness Plans to More Effectively Respond to Future
                  Food and Nutrition Security Crises
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-green-500"
                src="https://placehold.co/100x100"
                alt="Climate Change"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Climate Change</h3>
            <p className="text-zinc-700 mb-4">
              Climate change, poverty, and inequality are the defining issues of
              our age. The World Bank is the biggest multilateral funder of
              climate investments in developing countries.
            </p>
            <ul className="list-disc list-inside text-blue-500">
              <li>
                <a href="#" className="hover:underline">
                  World Bank at COP28
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Climate Action Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Climate Data
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Climate Explainer Series
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-red-500"
                src="https://placehold.co/100x100"
                alt="World Bank Data"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">World Bank Data</h3>
            <p className="text-zinc-700 mb-4">
              The Open Data site is designed to make World Bank undefined easy
              to find, download, and use. All of the undefined found here can be
              used free of charge with minimal restrictions.
            </p>
            <ul className="list-disc list-inside text-blue-500">
              <li>
                <a href="#" className="hover:underline">
                  Data Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Atlas of Sustainable Development Goals 2023
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Open Data
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                className="w-24 h-24 rounded-full border-4 border-yellow-500"
                src="https://placehold.co/100x100"
                alt="Building a Better Bank"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Building a Better Bank
            </h3>
            <p className="text-zinc-700 mb-4">
              The World Bank Group is building a faster, quicker Bank. We want
              to become a better partner to governments, the private sector,
              and, ultimately, the people we serve.
            </p>
            <ul className="list-disc list-inside text-blue-500">
              <li>
                <a href="#" className="hover:underline">
                  Key Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog – Keeping score: How the World Bank Group will drive
                  action for results
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  World Bank Statement on Evolution Roadmap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
