import React from "react"

export default function TeamPhotoSection() {
    return (
      <div className="bg-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-6 mb-12 md:mb-0 md:w-1/2">
            <img src="/company/team/t1.png" alt="Team Member 1" className="rounded-lg shadow-md" />
            <img src="/company/team/t2.png" alt="Team Member 2" className="rounded-lg shadow-md" />
            <img src="/company/team/t3.png" alt="Team Member 3" className="rounded-lg shadow-md" />
            <img src="/company/team/t4.png" alt="Team Member 4" className="rounded-lg shadow-md" />
          </div>
  
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Increase your brand presence with high-quality team photos
            </h2>
            <p className="text-blue-700 mb-8">
              Use compelling team photos to emphasize your company’s professionalism and team spirit. Our fast and efficient AI technology guarantees seamless integration into your brand identity.
            </p>
  
            <div className="space-y-4">
              {[
                {
                  title: "Individual branding:",
                  text: "Seamlessly adapt team photos to your brand’s visual concept. Our AI technology enables flexible design that highlights your corporate colors and style."
                },
                {
                  title: "Building trust:",
                  text: "Professional employee photos symbolize expertise and reliability. They create a trusting environment and immediately convey a positive impression to potential customers and partners."
                },
                {
                  title: "Lasting impressions:",
                  text: "With high-quality team photos, you strengthen the personal connection with your customers. A consistent and professional team photo has a lasting impact on recognition and brand loyalty."
                },
                {
                  title: "Time savings & efficiency:",
                  text: "Significantly shorten the photo production process with our AI-powered technology. Fast, straightforward, and without compromising quality."
                },
                {
                  title: "Minimal disruption to operations:",
                  text: "Your employees can get on with their work without having to sacrifice time for photo sessions. Our solutions require minimal effort for maximum results."
                },
                {
                  title: "Relief for the HR department:",
                  text: "Simplify the process of creating employee photos and reduce the workload of your HR department."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-blue-900 font-semibold mb-1">{item.title}</p>
                  <p className="text-blue-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  