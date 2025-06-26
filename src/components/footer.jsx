import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-50 flex flex-col min-h-screen justify-between">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto bg-white rounded-xl shadow-md px-8 py-12 mt-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Get started now with your new <br /> application photos – quickly and easily!
          </h1>
          <p className="text-blue-700 mb-6">
            Experience for yourself how our AI technology transforms your everyday
            photos into professional application photos. Perfect for LinkedIn,
            resumes, and all other professional needs.
          </p>
          <button className="bg-blue-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">
            Start now →
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="fbg.png"
            alt="People"
            className="w-full h-auto max-w-md rounded-md"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-2">MeinProfilbild.de</h2>
            <p className="text-sm mb-2">
              Your quick access to professional application photos thanks to the latest AI technology.
            </p>
            <a href="mailto:info@meinprofilbild.de" className="text-sm underline hover:text-blue-200">
              info@meinprofilbild.de
            </a>
          </div>

          <div>
            <h3 className="uppercase text-xs font-semibold mb-2">Info</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#faq" className="hover:underline">Questions and Answers</a>
              </li>
              <li>
                <a href="#price" className="hover:underline">Price</a>
              </li>
              <li>
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#terms" className="hover:underline">General Terms and Conditions</a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#imprint" className="hover:underline">Imprint</a>
              </li>
              <li>
                <a href="#affiliate" className="hover:underline">Affiliate</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs font-semibold mb-2">Follow us</h3>
            <div className="flex space-x-4 text-white text-xl">
              <a href="https://youtube.com" aria-label="YouTube" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.19 3.5 12 3.5 12 3.5s-7.19 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.39 0 12 0 12s0 3.61.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.81 20.5 12 20.5 12 20.5s7.19 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.61 24 12 24 12s0-3.61-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.381-.028-3.156-1.922-3.156-1.922 0-2.218 1.5-2.218 3.051v5.605h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.041 0 3.602 2.002 3.602 4.604v5.592z"/></svg>
              </a>
              <a href="https://twitter.com" aria-label="X" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.162 0h-20.324c-.995 0-1.838.843-1.838 1.838v20.324c0 .995.843 1.838 1.838 1.838h20.324c.995 0 1.838-.843 1.838-1.838v-20.324c0-.995-.843-1.838-1.838-1.838zm-5.845 7.548l-2.982 3.417 3.417 4.035h-2.13l-2.13-2.53-2.13 2.53h-2.13l3.417-4.035-2.982-3.417h2.13l2.13 2.53 2.13-2.53h2.13z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-blue-200 mt-8">
          &copy; {new Date().getFullYear()} Ahmed Alvi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
