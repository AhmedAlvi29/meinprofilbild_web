import React from "react";

const people = [
 
 {
    before: ["/story_pic/b12.jpeg", "/story_pic/b22.jpeg", "/story_pic/b22.jpeg"],
    after: ["/story_pic/a12.jpeg", "/story_pic/a22.png",  "/story_pic/a22.png"],
  },
  {
    before: ["/story_pic/b13.jpeg", "/story_pic/b23.jpeg","/story_pic/b23.jpeg"],
    after: ["/story_pic/a13.png", "/story_pic/a23.jpeg",  "/story_pic/a23.jpeg"],
  },
  {
     before: ["/story_pic/b13.jpeg", "/story_pic/b23.jpeg","/story_pic/b23.jpeg"],
    after: ["/story_pic/a13.png", "/story_pic/a23.jpeg","/story_pic/a23.jpeg"],
  }
];

export default function SuccessStories() {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
     
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        {people.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3"
          >
            <div className="text-left">
              <h3 className="font-bold text-sm text-gray-800">{person.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{person.title}</p>
             
              <p className="text-sm text-gray-700 mb-4">{person.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="inline-block text-xs text-blue-600 font-semibold border border-blue-300 px-2 py-1 rounded mb-1">
                  Previously
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {person.before.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Before"
                      className="rounded border border-dashed border-blue-400"
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className="inline-block text-xs text-blue-600 font-semibold border border-blue-300 px-2 py-1 rounded mb-1">
                  Afterwards
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {person.after.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="After"
                      className="rounded border border-blue-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 bg-blue-500 text-white font-semibold px-6 py-2 rounded shadow hover:bg-orange-600">
        See more examples
      </button>
    </div>
  );
}
