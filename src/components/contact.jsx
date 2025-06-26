import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-5xl grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Contact us – your way to professional employee photos
          </h2>
          <p className="text-sm text-blue-700">How to reach us</p>

          <div className="bg-blue-100 p-4 rounded-lg inline-flex items-center space-x-4">
            <div className="text-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.071 1.913l-7.5 4.5a2.25 2.25 0 01-2.358 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-blue-800 font-semibold">
                Or send us an email to
              </p>
              <p className="text-sm text-blue-900 font-bold">
                info@meinprofilbild.de
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-blue-700 font-medium">Full name</label>
            <input
              type="text"
              placeholder="First name Last Name"
              className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-blue-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-blue-700 font-medium">Your company</label>
            <input
              type="text"
              placeholder="company"
              className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-blue-700 font-medium">News</label>
            <input
              type="text"
              placeholder="How many employees do you have?"
              className="w-full border border-blue-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send request
          </button>
          <p className="text-sm text-center text-blue-600 mt-2">
            ⚡ We will reply to you within 24 hours
          </p>
        </form>
      </div>
    </div>
  );
}
