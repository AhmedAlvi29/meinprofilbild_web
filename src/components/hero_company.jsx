import React, { useState } from "react";
import '../input.css';

export function Hero() {
    return (
      <div className="bg-white">
        <div className="lg:px-8">
          <div className="relative isolate overflow-hidden bg-white-900 px-6 pt-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">
              Create professional team photos and employee portraits
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-500">
              Turn your employees' selfies into high-quality employee photos
                <br /><br />
                ✅ Simply upload & show team spirit
                <br />
                ✅ Advanced AI technology
                <br />
                ✅ Fast implementation
              </p>
           
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white      shadow-xs hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {' '}
                  Start Now{' '}
                </a>
               
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="company/hero.png"
                width={1824}
                height={1080}
                className="rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  