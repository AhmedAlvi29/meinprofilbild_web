import React from "react";

const steps = [
  {
    title: "Upload images",
    description:
      "Select your selfies and upload them to our secure platform. A simple background and good lighting are key—and of course, your smile!",
    icon: "📤",
  },
  {
    title: "Our AI gets to work",
    description:
      "Once your images arrive, our revolutionary AI technology kicks in. We create professional photos, each one optimized for perfection.",
    icon: "✨",
  },
  {
    title: "Download photos",
    description:
      "In just 90 minutes your photos are ready to download—perfect for LinkedIn, Xing, Stepstone, applications and more.",
    icon: "✅",
  },
];

const ProfessionalPhotoSteps = () => {
  return (
    <div id="how-work" className="min-h-screen bg-blue-50 text-blue-900 flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        It’s that simple: 3 steps to your professional application photo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-sm text-blue-800">{step.description}</p>
            <div className="h-40 w-full mt-6 border-2 border-dashed border-blue-300 rounded-lg flex justify-center items-center">
              <span className="text-blue-400">[Image Placeholder]</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-12 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Start now
      </button>
    </div>
  );
};

export default ProfessionalPhotoSteps;
