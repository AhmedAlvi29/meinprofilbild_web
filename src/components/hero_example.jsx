import React from "react"
export default function Hero(){
    return(
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="text-center max-w-xl">
      <p className="text-xs tracking-widest text-gray-500 uppercase mb-2">
        Examples and Evaluations
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our AI application photo examples
      </h1>
      <p className="text-sm text-gray-700 mb-6">
        See how AI turns ordinary snapshots into impressive application photos – 
        our before and after examples speak volumes.
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2">
          Start now
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  </div>
    )
}