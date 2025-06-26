import React from "react";

const people = [
  {
    name: "Felix F.",
    title: "Freelancer",
    rating: 5,
    description:
      "In my industry, first impressions are crucial. MeinProfilbild.de turned my selfie into an application photo that was not only professional but also authentic. I've received nothing but positive feedback!",
    before: ["/story_pic/b1.jpeg", "/story_pic/b2.png"],
    after: ["/story_pic/a1.jpeg", "/story_pic/a2.jpeg"],
  },
  {
    name: "Lisa W.",
    title: "Graduate",
    rating: 5,
    description:
      "As a recent graduate, I had neither the time nor the money for a professional photoshoot. MeinProfilbild.de enabled me to have a first-class application photo, and in a very short time. I'm convinced this contributed to my successful job entry.",
    before: ["/story_pic/b12.jpeg", "/story_pic/b22.jpeg"],
    after: ["/story_pic/a12.jpeg", "/story_pic/a22.png"],
  },
  {
    name: "Sarah B.",
    title: "Project Manager",
    rating: 5,
    description:
      "I've always had trouble looking good in photos, especially for job applications. With MeinProfilbild.de, I was finally able to get a photo that shows me at my best. This has definitely improved the quality of my applications.",
    before: ["/story_pic/b13.jpeg", "/story_pic/b23.jpeg"],
    after: ["/story_pic/a13.png", "/story_pic/a23.jpeg"],
  },
];

export default function SuccessStories() {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        From selfie to application hit: Our success stories
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Be inspired by our customers' transformations and take the next step in your career.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        {people.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3"
          >
            <div className="text-left">
              <h3 className="font-bold text-sm text-gray-800">{person.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{person.title}</p>
              <div className="flex gap-1 mb-3">
                {[...Array(person.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
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
