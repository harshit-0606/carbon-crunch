import React from 'react';

function WorkExplanation() {
  const steps = [
    {
      id: '01',
      title: 'Track and manage your Net Zero Pathway',
      description:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
    {
      id: '02',
      title: 'Track and manage your Net Zero Pathway',
      description:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
    {
      id: '03',
      title: 'Track and manage your Net Zero Pathway',
      description:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
  ];

  return (
    <div className="text-center mt-16 px-6">
  
      <p className="text-md font-bold text-green-700 bg-green-200 px-4 py-2 rounded-full inline-block tracking-wide uppercase">
        How It Works?
      </p>

      <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
        Getting Started is <span className="text-green-600">Easy</span>
      </h2>

    
      <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto font-medium">
        How <span className="font-bold text-gray-900">CarbonCrunch SAAS</span> works
      </p>


      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-left"
          >
            <p className="text-green-600 font-bold text-lg">{step.id}</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              {step.title}
            </h3>
            <p className="text-gray-700 mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExplanation;
