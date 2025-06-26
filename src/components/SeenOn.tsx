import React from 'react';

export default function SeenOn() {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Centered Heading with Dividers */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600 font-medium">Seen on</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <img src="/logos/stepstone.png" alt="StepStone" className="h-8 md:h-10 object-contain" />
          <img src="/logos/facebook.png" alt="Facebook" className="h-8 md:h-10 object-contain" />
          <img src="/logos/omr.png" alt="OMR Reviews" className="h-8 md:h-10 object-contain" />
          <img src="/logos/linkedin.png" alt="LinkedIn" className="h-8 md:h-10 object-contain" />
          <img src="/logos/xing.png" alt="XING" className="h-8 md:h-10 object-contain" />
          <img src="/logos/gruender.png" alt="Gründer Stipendium" className="h-8 md:h-10 object-contain" />
        </div>
      </div>
    </div>
  );
}
